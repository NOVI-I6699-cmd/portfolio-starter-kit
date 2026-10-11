export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { store, revenue, email } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY!);
    const r = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_TO!,
      subject: `Lead: ${store} - ${revenue}`,
      html: `<p>Store: ${store}<br>Revenue: ${revenue}<br>Email: ${email}</p>`,
      replyTo: email,
    });
    if (r.error) return NextResponse.json({ error: r.error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
