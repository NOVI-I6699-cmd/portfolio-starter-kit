import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, store } = await req.json();
    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ error: 'EMAIL config missing' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Lead: ${email} - ${store || 'No store'}`,
      text: `New diagnostic request\n\nEmail: ${email}\nStore: ${store || 'unknown'}\n\nFrom: novi-llc.com`,
      html: `<h2>New Diagnostic Request</h2><p><b>Email:</b> ${email}</p><p><b>Store:</b> ${store || 'unknown'}</p><p>From novi-llc.com</p>`,
    });

    console.log('Email sent via Gmail');
    return NextResponse.json({ success: true });

  } catch (e: any) {
    console.error('EMAIL ERROR:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
