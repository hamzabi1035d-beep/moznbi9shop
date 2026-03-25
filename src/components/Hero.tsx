import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" 
          alt="Billiards background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            احترافك يبدأ <br />
            <span className="text-brand-orange text-stroke">من هنا</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 text-gray-200">
            أفضل أنواع الإكسسوارات وقطع الغيار الأصلية للبلياردو والبابي فوت.
          </p>
          <button className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-brand-orange/30">
            تسوق التشكيلة الجديدة
          </button>
        </motion.div>
      </div>
    </section>
  );
}
