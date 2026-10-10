import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email, store, revenue } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: `New ${revenue} Lead: ${store}`,
      html: `
        <h2>New $5k+ Lead!</h2>
        <p><b>Store:</b> ${store}</p>
        <p><b>Revenue:</b> ${revenue}</p>
        <p><b>Email:</b> ${email}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("EMAIL ERROR:", err);
    // Return success even if email fails, so user doesn't see Failed
    // Lead is still in Vercel logs
    return NextResponse.json({ success: true });
  }
}
