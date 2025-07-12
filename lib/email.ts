import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendWelcomeEmail(
  to: string,
  businessName: string,
  userName: string
) {
  await transporter.sendMail({
    from: `"Swipe Savvy" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Welcome to Swipe Savvy!',
    html: `
      <h2>Hello ${userName},</h2>
      <p>Your business <strong>${businessName}</strong> has been successfully listed!</p>
      <p>We’re excited to have you on board.</p>
    `,
  });
}
