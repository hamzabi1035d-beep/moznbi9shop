import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

interface FloatingCartProps {
  onClick: () => void;
}

export default function FloatingCart({ onClick }: FloatingCartProps) {
  const { totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          className="fixed right-6 bottom-24 z-40 flex flex-col items-end gap-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="group relative flex items-center gap-3 bg-brand-dark text-white p-4 rounded-2xl shadow-2xl shadow-brand-dark/40 border border-white/10 overflow-hidden"
          >
            {/* Glossy Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">سلة التسوق</span>
              <span className="text-lg font-black text-brand-orange">{totalPrice} ر.س</span>
            </div>

            <div className="relative">
              <div className="bg-brand-orange p-3 rounded-xl group-hover:bg-orange-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <span className="absolute -top-2 -right-2 bg-white text-brand-dark text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-brand-dark">
                {totalItems}
              </span>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
