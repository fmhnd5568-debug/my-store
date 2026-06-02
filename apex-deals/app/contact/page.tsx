'use client';

import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { useState } from 'react';
import { isValidEmail, isValidPhone } from '@/lib/utils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // التحقق من صحة البيانات
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessage({ type: 'error', text: 'يرجى ملء جميع الحقول المطلوبة' });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setMessage({ type: 'error', text: 'البريد الإلكتروني غير صحيح' });
      return;
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      setMessage({ type: 'error', text: 'رقم الهاتف غير صحيح' });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'تم إرسال رسالتك بنجاح. شكراً لتواصلك معنا!' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setMessage({ type: 'error', text: 'حدث خطأ في إرسال الرسالة. يرجى المحاولة لاحقاً' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'حدث خطأ في الاتصال. يرجى المحاولة لاحقاً' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* الرأس */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">🎯 {siteConfig.name}</h1>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600">الرئيسية</Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600">من نحن</Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-bold">اتصل بنا</Link>
            <Link href="/privacy" className="text-gray-700 hover:text-orange-600">السياسات</Link>
          </div>
        </nav>
      </header>

      {/* المحتوى الرئيسي */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-8">اتصل بنا 📞</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* بطاقة البريد */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
            <p className="text-gray-600 font-semibold">{siteConfig.contact.email}</p>
            <p className="text-gray-500 text-sm mt-2">نرد على الرسائل خلال 24 ساعة</p>
          </div>

          {/* بطاقة الهاتف */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">الهاتف</h3>
            <p className="text-gray-600 font-semibold">{siteConfig.contact.phone}</p>
            <p className="text-gray-500 text-sm mt-2">متاح من السبت للخميس 9 ص - 6 م</p>
          </div>

          {/* بطاقة WhatsApp */}
          <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-600 font-semibold">{siteConfig.contact.whatsapp}</p>
            <p className="text-gray-500 text-sm mt-2">رسائل فورية وسريعة</p>
          </div>
        </div>

        {/* نموذج الاتصال */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>
          
          {message && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* الاسم */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">الاسم الكامل *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="أدخل اسمك"
                  required
                />
              </div>

              {/* البريد */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">البريد الإلكتروني *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </div>
            </div>

            {/* الهاتف */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">رقم الهاتف (اختياري)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="مثال: 01217778898"
              />
            </div>

            {/* الموضوع */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">الموضوع *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="موضوع رسالتك"
                required
              />
            </div>

            {/* الرسالة */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">الرسالة *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
                placeholder="اكتب رسالتك هنا..."
                required
              />
            </div>

            {/* الزر */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition font-semibold disabled:bg-gray-400"
            >
              {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
            </button>
          </form>
        </div>
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
