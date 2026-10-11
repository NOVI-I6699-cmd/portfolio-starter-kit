export const dynamic = 'force-dynamic';
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { store, revenue, email } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [process.env.CONTACT_TO || "eveilsaint6699@gmail.com"],
      subject: `New Lead: ${store} - ${revenue}`,
      replyTo: email,
      html: `<p><b>Store:</b> ${store}<br><b>Revenue:</b> ${revenue}<br><b>Customer Email:</b> ${email}</p>`
    });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
