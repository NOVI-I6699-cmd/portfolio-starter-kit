import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email as string;
    const store = body.store as string | undefined;

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
      subject: `New Shopify Audit Lead: ${email}`,
      text: `New lead:\nEmail: ${email}\nStore: ${store || 'N/A'}\nTime: ${new Date().toISOString()}`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('EMAIL ERROR', err);
    return NextResponse.json({ error: err?.message || 'Failed' }, { status: 500 });
  }
}
