import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <noreply@yourdomain.com>`,
      to: process.env.CONTACT_EMAIL as string,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<h3>New message from portfolio</h3>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true, status: 'Email sent successfully' });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ ok: false, error: errorMessage }, { status: 500 });
  }
}
