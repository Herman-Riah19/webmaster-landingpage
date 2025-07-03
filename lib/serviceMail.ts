'use server';

import nodemailer from 'nodemailer';

export async function sendEmailAction(formData: FormData) {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!email || !message) {
    return { success: false, error: 'Email ou message manquant.' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou autre service SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: 'Nouveau message via formulaire webmaster',
    text: `Email: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return { success: false, error: 'Erreur lors de l’envoi du message.' };
  }
}
