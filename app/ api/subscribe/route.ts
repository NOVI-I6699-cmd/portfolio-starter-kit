import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, store, revenue } = await req.json();

    if (!email || !revenue) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    console.log('NEW LEAD:', { email, store, revenue });

    // If you use Resend, uncomment this:
    /*
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Novi LLC <leads@novi-llc.com>',
      to: 'your-email@gmail.com',
      subject: `New $${revenue} Lead: ${store}`,
      html: `<p>Store: ${store}</p><p>Email: ${email}</p><p>Revenue: ${revenue}</p>`
    });
    */

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('API ERROR:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
