import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, store } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Shopify Audit: ${email}`,
      text: `New Lead:\nEmail: ${email}\nStore: ${store || 'N/A'}\nDate: ${new Date().toISOString()}`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('EMAIL ERROR', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
