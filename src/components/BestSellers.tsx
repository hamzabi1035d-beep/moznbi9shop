import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const products: Product[] = [
  {
    id: '1',
    name: 'عصا بلياردو Predator 500',
    price: 1250,
    oldPrice: 1500,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1611676279444-5577698aa13c?q=80&w=500&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'طقم كرات Aramith Pro',
    price: 850,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=500&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1611676279444-5577698aa13c?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'لاعب بابي فوت أصلي',
    price: 45,
    oldPrice: 60,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=500&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'جوخ طاولات Simonis 860',
    price: 2100,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=500&auto=format&fit=crop',
    hoverImage: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=500&auto=format&fit=crop'
  }
];

export default function BestSellers() {
  const { addToCart } = useCart();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-black text-brand-dark">الأكثر مبيعاً</h2>
          <a href="#" className="text-brand-orange font-bold hover:underline">عرض الكل</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-white">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src={product.hoverImage} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                {product.oldPrice && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    خصم {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <h3 className="font-bold text-gray-800 mb-2 group-hover:text-brand-orange transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-black text-brand-dark">{product.price} ر.س</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">{product.oldPrice} ر.س</span>
                  )}
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-brand-dark hover:bg-brand-orange text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  أضف للسلة
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
