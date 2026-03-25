import { motion } from 'motion/react';

const categories = [
  { id: '1', name: 'قسم العصي', icon: 'https://cdn-icons-png.flaticon.com/512/3068/3068414.png' },
  { id: '2', name: 'قسم الكرات', icon: 'https://cdn-icons-png.flaticon.com/512/3068/3068404.png' },
  { id: '3', name: 'قطع غيار البابي فوت', icon: 'https://cdn-icons-png.flaticon.com/512/3068/3068421.png' },
  { id: '4', name: 'مستلزمات الطاولات', icon: 'https://cdn-icons-png.flaticon.com/512/3068/3068418.png' },
];

export default function QuickCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-50 flex items-center justify-center mb-4 border border-gray-100 group-hover:border-brand-orange group-hover:bg-brand-orange/5 transition-all duration-300">
                <img 
                  src={cat.icon} 
                  alt={cat.name} 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-sm md:text-base font-bold text-gray-700 group-hover:text-brand-orange transition-colors">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
