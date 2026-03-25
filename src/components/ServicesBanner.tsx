import { Wrench } from 'lucide-react';

export default function ServicesBanner() {
  return (
    <section className="py-16 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 text-brand-orange mb-4">
              <Wrench className="w-6 h-6" />
              <span className="font-bold tracking-widest uppercase text-sm">خدمات الصيانة الاحترافية</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">هل تحتاج لصيانة طاولتك؟</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                <span>تغيير الجوخ</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                <span>وزن الطاولة</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                <span>تركيب لاعبين</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full"></div>
                <span>توفير قطع غيار نادرة</span>
              </div>
            </div>
            <button className="bg-white text-brand-dark hover:bg-brand-orange hover:text-white font-bold py-4 px-10 rounded-full transition-all">
              اطلب فني الآن
            </button>
          </div>
          
          <div className="flex-1 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=800&auto=format&fit=crop" 
              alt="Maintenance service" 
              className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
