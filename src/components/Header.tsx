import { Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onOpenCart: () => void;
}

export default function Header({ onOpenCart }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Header */}
      <div className="border-bottom border-gray-100">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-black tracking-tighter text-brand-dark">
              كيو <span className="text-brand-orange">&</span> غول
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <input
              type="text"
              placeholder="ابحث عن عصا، كرات، أو قطع غيار.."
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-2 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-gray-600 hover:text-brand-orange transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="text-gray-600 hover:text-brand-orange transition-colors relative">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button 
              onClick={onOpenCart}
              className="text-gray-600 hover:text-brand-orange transition-colors relative"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-50`}>
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 py-3 text-sm font-bold text-gray-700">
            <li><a href="#" className="hover:text-brand-orange transition-colors">بلياردو</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">بابي فوت</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">أدوات صيانة</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors text-red-600">عروض خاصة</a></li>
            <li><a href="#" className="hover:text-brand-orange transition-colors">مدونة اللاعبين</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
