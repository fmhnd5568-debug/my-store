import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: 'من نحن - Apex Deals',
  description: 'تعرف على فريق Apex Deals والرؤية والمهمة وراء منصتنا',
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* الرأس */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">🎯 {siteConfig.name}</h1>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600">الرئيسية</Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-bold">من نحن</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600">اتصل بنا</Link>
            <Link href="/privacy" className="text-gray-700 hover:text-orange-600">السياسات</Link>
          </div>
        </nav>
      </header>

      {/* المحتوى الرئيسي */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-8">من نحن 🤝</h2>
        
        <section className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h3 className="text-2xl font-bold mb-4 text-orange-600">مهمتنا</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            نسعى لتوفير أفضل خدمة لمقارنة الأسعار في الشرق الأوسط، حيث يمكن للعملاء الحصول على أفضل 
            العروض والأسعار من متاجر عالمية موثوقة، كل ذلك في مكان واحد سهل وآمن.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h3 className="text-2xl font-bold mb-4 text-orange-600">رؤيتنا</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            أن نكون المنصة الأولى والموثوقة لمقارنة الأسعار في العالم العربي، مما يوفر للعملاء الوقت 
            والمال ويساعدهم على اتخاذ قرارات شراء ذكية.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h3 className="text-2xl font-bold mb-4 text-orange-600">قيمنا</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-orange-600 pl-4">
              <h4 className="font-bold text-lg mb-2">🎯 الصدق والشفافية</h4>
              <p className="text-gray-600">نقدم معلومات دقيقة وموثوقة عن الأسعار والمنتجات</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h4 className="font-bold text-lg mb-2">⚡ الكفاءة والسرعة</h4>
              <p className="text-gray-600">نوفر أفضل الأدوات للبحث السريع والفعال</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h4 className="font-bold text-lg mb-2">👥 خدمة العملاء</h4>
              <p className="text-gray-600">فريقنا دائماً هنا لمساعدتك وحل مشاكلك</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-4">
              <h4 className="font-bold text-lg mb-2">🔒 الأمان والخصوصية</h4>
              <p className="text-gray-600">نحمي بيانات عملائنا بأعلى معايير الأمان</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-orange-600">فريقنا</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            فريق Apex Deals يتكون من متخصصين في مجالات التكنولوجيا والتسويق والخدمة اللوجستية، 
            كل فرد في الفريق مكرس لتقديم أفضل تجربة ممكنة للعملاء.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            نعمل بجد كل يوم لتحسين خدماتنا والاستماع لملاحظات وآراء العملاء.
          </p>
        </section>
      </div>

      {/* التذييل */}
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>📧 {siteConfig.contact.email} | 📞 {siteConfig.contact.phone}</p>
          <p className="mt-4">© 2026 Apex Deals. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
