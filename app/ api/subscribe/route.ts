export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO || "eveilsaint6699@gmail.com";
    const emailFrom = process.env.EMAIL_FROM || "Novi LLC <info@novi-llc.com>";

    if (!apiKey) return NextResponse.json({ error: "RESEND_API_KEY missing in Vercel" }, { status: 500 });

    const resend = new Resend(apiKey);
    const { store, revenue, email } = await req.json();

    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const { error } = await resend.emails.send({
      from: emailFrom,
      to: [contactTo],
      subject: `New Lead: ${store} - ${revenue}`,
      replyTo: email,
      html: `<p><b>Store:</b> ${store}<br/><b>Revenue:</b> ${revenue}<br/><b>Email:</b> ${email}</p>`
    });

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
