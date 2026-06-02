import nodemailer from 'nodemailer';

// إعداد Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * إرسال رسالة جديدة من نموذج الاتصال
 */
export async function sendContactEmail(
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
) {
  try {
    // إرسال إيميل للمسؤول
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `رسالة جديدة من ${name} - ${subject}`,
      html: `
        <h2>رسالة جديدة من نموذج الاتصال</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد:</strong> ${email}</p>
        <p><strong>الهاتف:</strong> ${phone}</p>
        <p><strong>الموضوع:</strong> ${subject}</p>
        <p><strong>الرسالة:</strong></p>
        <p>${message}</p>
      `,
    });

    // إرسال بريد تأكيد للمستخدم
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'شكراً لتواصلك معنا - Apex Deals',
      html: `
        <h2>شكراً لتواصلك معنا</h2>
        <p>مرحباً ${name}،</p>
        <p>تم استقبال رسالتك بنجاح وسيقوم فريقنا بالرد عليك قريباً.</p>
        <p>بيانات رسالتك:</p>
        <ul>
          <li><strong>الموضوع:</strong> ${subject}</li>
          <li><strong>التاريخ:</strong> ${new Date().toLocaleDateString('ar-EG')}</li>
        </ul>
        <p>شكراً لاختيارك Apex Deals!</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('خطأ في إرسال البريد:', error);
    return { success: false, error };
  }
}

/**
 * إرسال بريد أوامر التحقق
 */
export async function sendVerificationEmail(email: string, token: string) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'تأكيد بريدك الإلكتروني - Apex Deals',
      html: `
        <h2>تأكيد البريد الإلكتروني</h2>
        <p>اضغط على الرابط أدناه لتأكيد بريدك:</p>
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/verify?token=${token}">تأكيد البريد</a>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('خطأ في إرسال بريد التحقق:', error);
    return { success: false, error };
  }
}
