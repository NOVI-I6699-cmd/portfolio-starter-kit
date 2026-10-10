import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { email, store } = await req.json();
    if (!email) return NextResponse.json({ error: 'No email' }, { status: 400 });

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
      subject: `New Shopify Audit Lead: ${email}`,
      text: `New lead!\nEmail: ${email}\nStore: ${store || 'Not provided'}\nTime: ${new Date().toISOString()}`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Email error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
