import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

const signals = [
  { icon: Truck, title: 'شحن سريع', desc: 'لجميع المناطق' },
  { icon: ShieldCheck, title: 'جودة مضمونة', desc: 'منتجات أصلية 100%' },
  { icon: CreditCard, title: 'دفع آمن', desc: 'تشفير كامل لبياناتك' },
  { icon: Headphones, title: 'دعم فني', desc: 'خبراء جاهزون لخدمتك' },
];

export default function TrustSignals() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                <signal.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-brand-dark mb-1">{signal.title}</h3>
              <p className="text-sm text-gray-500">{signal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
