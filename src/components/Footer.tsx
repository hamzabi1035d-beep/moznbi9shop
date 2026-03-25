import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: About */}
          <div>
            <div className="text-2xl font-black tracking-tighter text-brand-dark mb-6">
              كيو <span className="text-brand-orange">&</span> غول
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              وجهتك الأولى في المملكة لكل ما يخص عالم البلياردو والبابي فوت. نوفر أجود أنواع العصي، الكرات، وقطع الغيار الأصلية مع خدمات صيانة احترافية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 text-brand-dark">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-brand-orange transition-colors">سياسة الاستبدال والاسترجاع</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">تتبع شحنتك</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">من نحن</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="text-lg font-black mb-6 text-brand-dark">النشرة البريدية</h4>
            <p className="text-gray-600 mb-6">اشترك للحصول على آخر العروض والخصومات الحصرية.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-white border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange"
              />
              <button className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors">
                اشترك الآن
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 font-medium">
            © 2026 كيو آند غول. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 grayscale opacity-70">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png" alt="Apple Pay" className="h-5" referrerPolicy="no-referrer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mada_Logo.svg/1200px-Mada_Logo.svg.png" alt="Mada" className="h-4" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
