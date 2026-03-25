import Header from './components/Header';
import Hero from './components/Hero';
import QuickCategories from './components/QuickCategories';
import BestSellers from './components/BestSellers';
import ServicesBanner from './components/ServicesBanner';
import TrustSignals from './components/TrustSignals';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import FloatingCart from './components/FloatingCart';
import { CartProvider } from './context/CartContext';
import { useState } from 'react';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen font-sans selection:bg-brand-orange selection:text-white">
        <Header onOpenCart={() => setIsCartOpen(true)} />
        <main>
          <Hero />
          <QuickCategories />
          <BestSellers />
          <ServicesBanner />
          <TrustSignals />
        </main>
        <Footer />
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <FloatingCart onClick={() => setIsCartOpen(true)} />
      </div>
    </CartProvider>
  );
}
