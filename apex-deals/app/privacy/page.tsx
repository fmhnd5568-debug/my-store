import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: 'سياسة الخصوصية - Apex Deals',
  description: 'سياسة الخصوصية والشروط والأحكام',
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* الرأس */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">🎯 {siteConfig.name}</h1>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600">الرئيسية</Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600">من نحن</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600">اتصل بنا</Link>
            <Link href="/privacy" className="text-gray-700 hover:text-orange-600 font-bold">السياسات</Link>
          </div>
        </nav>
      </header>

      {/* المحتوى الرئيسي */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-8">سياسة الخصوصية 🔒</h2>
        <p className="text-gray-600 mb-8">آخر تحديث: {new Date().toLocaleDateString('ar-EG')}</p>

        {/* مقدمة */}
        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-2xl font-bold mb-4">مقدمة</h3>
          <p className="text-gray-700 leading-relaxed">
            ترحب بك Apex Deals ("الموقع" أو "الخدمة"). نحن ملتزمون بحماية خصوصيتك وضمان فهمك الكامل لكيفية 
            استخدامنا لمعلوماتك. هذه السياسة تشرح ممارسات الخصوصية الخاصة بنا.
          </p>
        </section>

        {/* المعلومات التي نجمعها */}
        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-2xl font-bold mb-4">1. المعلومات التي نجمعها</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-lg mb-2">المعلومات الشخصية:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>الاسم والبريد الإلكتروني</li>
                <li>رقم الهاتف وعنوان التوصيل</li>
                <li>معلومات الحساب وكلمة المرور</li>
                <li>سجل عمليات الشراء والتفضيلات</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">معلومات الاستخدام:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>سجلات الأنشطة والمتصفح</li>
                <li>عنوان IP وموقع الجهاز</li>
                <li>ملفات تعريف الارتباط (Cookies)</li>
                <li>بيانات استخدام الموقع والتطبيق</li>
              </ul>
            </div>
          </div>
        </section>

        {/* كيفية استخدام المعلومات */}
        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-2xl font-bold mb-4">2. كيفية نستخدم معلوماتك</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>تقديم وتحسين خدماتنا</li>
            <li>معالجة طلبات الشراء والدفع</li>
            <li>إرسال التحديثات والإشعارات</li>
            <li>الاتصال بك بشأن حسابك والخدمة</li>
            <li>منع الاحتيال والأنشطة غير القانونية</li>
            <li>تحليل البيانات وتحسين تجربة المستخدم</li>
          </ul>
        </section>

        {/* حماية البيانات */}
        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-2xl font-bold mb-4">3. حماية البيانات</h3>
          <p className="text-gray-700 leading-relaxed">
            نستخدم تشفير SSL وتقنيات أمان حديثة لحماية بيانات عملائنا. جميع المعاملات آمنة 
            ومحمية بأعلى معايير الأمان. لا نشارك بيانات عملائنا مع أطراف ثالثة دون إذن صريح.
          </p>
        </section>

        {/* حقوق المستخدم */}
        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-2xl font-bold mb-4">4. حقوقك</h3>
          <p className="text-gray-700 mb-4">لديك الحق في:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>الوصول إلى بيانات حسابك الشخصية</li>
            <li>تصحيح أو تحديث معلوماتك</li>
            <li>حذف حسابك وبيانات</li>
            <li>الاعتراض على معالجة بيانات</li>
            <li>الحصول على نسخة من بيانات</li>
          </ul>
        </section>

        {/* الشروط والأحكام */}
        <section className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-2xl font-bold mb-4">5. الشروط والأحكام</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold mb-2">استخدام الموقع:</h4>
              <p className="text-gray-700">
                توافق على استخدام هذا الموقع بشكل قانوني ولا تحاول الوصول غير المصرح إليه أو الإضرار بالموقع.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">المسؤولية:</h4>
              <p className="text-gray-700">
                Apex Deals ليس مسؤولاً عن الأضرار المباشرة أو غير المباشرة الناجمة عن استخدام الموقع.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2">التغييرات:</h4>
              <p className="text-gray-700">
                نحتفظ بالحق في تعديل هذه السياسة في أي وقت. سيتم إخطارك بأي تغييرات جوهرية.
              </p>
            </div>
          </div>
        </section>

        {/* التواصل */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4">6. الاتصال بنا</h3>
          <p className="text-gray-700 mb-4">إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:</p>
          <div className="bg-orange-50 p-4 rounded border border-orange-200">
            <p className="mb-2"><strong>📧 البريد الإلكتروني:</strong> {siteConfig.contact.email}</p>
            <p className="mb-2"><strong>📞 الهاتف:</strong> {siteConfig.contact.phone}</p>
            <p><strong>💬 WhatsApp:</strong> {siteConfig.contact.whatsapp}</p>
          </div>
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
