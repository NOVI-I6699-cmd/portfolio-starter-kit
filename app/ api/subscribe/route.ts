import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }
    const to = process.env.CONTACT_TO || "hello@novi-llc.com";
    await resend.emails.send({
      from: "Novi LLC <onboarding@resend.dev>",
      to: to,
      subject: "New Lead from Novi",
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
