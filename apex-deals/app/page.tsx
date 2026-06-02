import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* الرأس */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">🎯 {siteConfig.name}</h1>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600">الرئيسية</Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600">من نحن</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600">اتصل بنا</Link>
            <Link href="/privacy" className="text-gray-700 hover:text-orange-600">السياسات</Link>
          </div>
        </nav>
      </header>

      {/* البطل */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">أفضل أسعار في الإنترنت 🛍️</h2>
        <p className="text-xl text-gray-600 mb-8">{siteConfig.description}</p>
        <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition text-lg">
          ابدأ البحث عن العروض
        </button>
      </section>

      {/* الميزات */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">لماذا Apex Deals؟</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:shadow-lg rounded-lg transition">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold mb-2">أفضل الأسعار</h4>
              <p className="text-gray-600">نقارن الأسعار من أفضل المتاجر العالمية لك</p>
            </div>
            <div className="text-center p-6 hover:shadow-lg rounded-lg transition">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold mb-2">سرعة البحث</h4>
              <p className="text-gray-600">ابحث عن أي منتج واحصل على أفضل سعر فوراً</p>
            </div>
            <div className="text-center p-6 hover:shadow-lg rounded-lg transition">
              <div className="text-4xl mb-4">🔔</div>
              <h4 className="text-xl font-bold mb-2">تنبيهات الأسعار</h4>
              <p className="text-gray-600">تنبيهات فورية عند انخفاض أسعار منتجاتك المفضلة</p>
            </div>
          </div>
        </div>
      </section>

      {/* التصنيفات */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold mb-12">تصفح حسب التصنيف</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {siteConfig.categories.map((cat) => (
            <div key={cat.id} className="bg-white p-6 rounded-lg text-center hover:shadow-lg cursor-pointer transition">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <p className="font-semibold text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* التذييل */}
      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">عن Apex Deals</h4>
              <p className="text-gray-400">أفضل منصة لمقارنة الأسعار والحصول على أفضل العروض</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/about" className="hover:text-white">من نحن</Link></li>
                <li><Link href="/privacy" className="hover:text-white">السياسات</Link></li>
                <li><Link href="/contact" className="hover:text-white">اتصل بنا</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">تابعنا</h4>
              <div className="space-y-2 text-gray-400">
                <p>📘 Facebook</p>
                <p>🐦 Twitter</p>
                <p>📷 Instagram</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">اتصل بنا</h4>
              <p className="text-gray-400">📧 {siteConfig.contact.email}</p>
              <p className="text-gray-400">📞 {siteConfig.contact.phone}</p>
            </div>
          </div>
          <hr className="border-gray-700 my-8" />
          <p className="text-center text-gray-400">© 2026 Apex Deals. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
