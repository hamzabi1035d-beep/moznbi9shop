import { X, MapPin, User, CheckCircle2, Trash2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [step, setStep] = useState<'cart' | 'form' | 'success'>('cart');
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: ''
  });

  const DELIVERY_FEE = 50;
  const grandTotal = totalPrice + DELIVERY_FEE;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    setTimeout(() => {
      onClose();
      setStep('cart');
      clearCart();
      setFormData({ name: '', location: '', phone: '' });
    }, 3000);
  };

  if (cartItems.length === 0 && step !== 'success') {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="relative bg-white w-full max-w-md rounded-3xl p-12 text-center shadow-2xl">
              <button onClick={onClose} className="absolute top-4 left-4 text-gray-400 hover:text-brand-dark"><X className="w-6 h-6" /></button>
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-10 h-10 text-gray-400" />
              </div>
              <h2 className="text-2xl font-black text-brand-dark mb-2">السلة فارغة</h2>
              <p className="text-gray-500 mb-8">لم تقم بإضافة أي منتجات بعد.</p>
              <button onClick={onClose} className="w-full bg-brand-dark text-white font-bold py-4 rounded-xl">ابدأ التسوق</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-xl font-black text-brand-dark">
                {step === 'cart' ? 'سلة التسوق' : step === 'form' ? 'بيانات التوصيل' : 'تم الطلب'}
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-brand-dark transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {step === 'cart' && (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-brand-dark text-sm mb-1">{item.name}</h3>
                        <p className="text-brand-orange font-black text-sm">{item.price} ر.س</p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-brand-orange"><Minus className="w-4 h-4" /></button>
                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-brand-orange"><Plus className="w-4 h-4" /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                      <div className="text-right font-black text-brand-dark">
                        {item.price * item.quantity} ر.س
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {step === 'form' && (
                <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input required type="text" placeholder="الاسم الكامل" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input required type="text" placeholder="العنوان / المدينة" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange" />
                  </div>
                  <div className="relative">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">966+</div>
                    <input required type="tel" placeholder="رقم الجوال" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pr-16 pl-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange" />
                  </div>
                </form>
              )}

              {step === 'success' && (
                <div className="py-12 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </motion.div>
                  <h2 className="text-2xl font-black text-brand-dark mb-2">تم استلام طلبك!</h2>
                  <p className="text-gray-600 mb-6">شكراً لك يا {formData.name}، سنتواصل معك قريباً لتأكيد التوصيل.</p>
                  <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 3 }} className="h-full bg-brand-orange" />
                  </div>
                </div>
              )}
            </div>

            {step !== 'success' && (
              <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">إجمالي المنتجات:</span>
                  <span className="text-brand-dark font-bold">{totalPrice} ر.س</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">رسوم التوصيل:</span>
                  <span className="text-brand-dark font-bold">{DELIVERY_FEE} ر.س</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <span className="text-brand-dark font-black">الإجمالي النهائي:</span>
                  <span className="text-2xl font-black text-brand-orange">{grandTotal} ر.س</span>
                </div>
                
                {step === 'cart' ? (
                  <button onClick={() => setStep('form')} className="w-full bg-brand-dark text-white font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-95 mt-4">
                    الذهاب للدفع
                  </button>
                ) : (
                  <div className="flex gap-3 mt-4">
                    <button onClick={() => setStep('cart')} className="flex-1 bg-white border border-gray-200 text-gray-600 font-bold py-4 rounded-xl">رجوع</button>
                    <button form="checkout-form" type="submit" className="flex-[2] bg-brand-orange text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-orange/20">تأكيد الطلب</button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import { ShoppingCart } from 'lucide-react';
