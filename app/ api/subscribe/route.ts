export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO || "eveilsaint6699@gmail.com";
    const emailFrom = process.env.EMAIL_FROM || "Novi LLC <info@novi-llc.com>";

    if (!apiKey) {
      return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const body = await req.json();

    const store = (body.store || "").trim();
    const revenue = (body.revenue || "").trim();
    const email = (body.email || "").trim();

    if (!email ||!email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const result = await resend.emails.send({
      from: emailFrom,
      to: [contactTo],
      subject: `New Lead: ${store} - ${revenue}`,
      replyTo: email,
      html: `
        <h2>New Audit Request - Novi LLC</h2>
        <p><b>Store:</b> ${store}</p>
        <p><b>Revenue:</b> ${revenue}</p>
        <p><b>Customer Email:</b> ${email}</p>
        <hr/>
        <p style="color:#666;font-size:12px">From www.novi-llc.com</p>
      `,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });

  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
