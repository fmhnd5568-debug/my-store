// دوال مساعدة عامة

/**
 * تنسيق السعر بالعملة المحلية
 */
export function formatPrice(price: number, currency: string = 'EGP'): string {
  return new Intl.NumberFormat('ar-EG', {
    style: 'currency',
    currency: currency,
  }).format(price);
}

/**
 * حساب نسبة الخصم
 */
export function calculateDiscount(originalPrice: number, discountedPrice: number): number {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

/**
 * التاريخ والوقت بالعربية
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

/**
 * تقصير النص
 */
export function truncateText(text: string, length: number = 100): string {
  return text.length > length ? text.substring(0, length) + '...' : text;
}

/**
 * التحقق من صحة البريد الإلكتروني
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * التحقق من صحة رقم الهاتف
 */
export function isValidPhone(phone: string): boolean {
  return /^(\+20|0)[0-9]{10}$/.test(phone);
}
