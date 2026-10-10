import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, store } = await req.json();
    if (!email || !store) return NextResponse.json({error:'Missing'}, {status:400});
    
    const nodemailer = require('nodemailer');
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
      subject: `New Lead: ${email}`,
      text: `Email: ${email}\nStore: ${store}\nTime: ${new Date().toISOString()}`,
    });
    
    return NextResponse.json({success:true});
  } catch (e:any) {
    return NextResponse.json({error:e.message}, {status:500});
  }
}
