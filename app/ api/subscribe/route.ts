import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, store } = await req.json();
    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nodemailer = require('nodemailer');

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
      text: `Email: ${email}\nStore: ${store || 'N/A'}\nTime: ${new Date().toISOString()}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('EMAIL ERROR:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
