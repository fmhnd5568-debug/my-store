// إعدادات الموقع الأساسية
export const siteConfig = {
  name: 'Apex Deals',
  description: 'أفضل موقع لمقارنة الأسعار والعروض اليومية',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: 'https://apex-deals.com/og.png',
  
  // معلومات الاتصال
  contact: {
    email: 'contact.masrtech@gmail.com',
    phone: '01217778898',
    whatsapp: '+201217778898',
  },
  
  // روابط التواصل الاجتماعي
  social: {
    facebook: 'https://facebook.com/apexdeals',
    twitter: 'https://twitter.com/apexdeals',
    instagram: 'https://instagram.com/apexdeals',
    youtube: 'https://youtube.com/apexdeals',
  },
  
  // المتاجر المدعومة
  stores: [
    { name: 'AliExpress', icon: '🛍️' },
    { name: 'Amazon', icon: '🎁' },
    { name: 'eBay', icon: '📦' },
  ],
  
  // الفئات
  categories: [
    { id: 1, name: 'الإلكترونيات', icon: '⚡' },
    { id: 2, name: 'الملابس', icon: '👕' },
    { id: 3, name: 'المنزل', icon: '🏠' },
    { id: 4, name: 'الرياضة', icon: '⚽' },
    { id: 5, name: 'الكتب', icon: '📚' },
  ],
};
