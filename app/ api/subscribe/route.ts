import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const { store, revenue, email } = await req.json();

    const result = await resend.emails.send({
      from: "Novi LLC <onboarding@resend.dev>",
      to: ["Don.floran1@gmail.com"], // ONLY 1 - this WILL deliver
      subject: `New Lead: ${store} - ${email} - ${revenue}`,
      replyTo: email,
      html: `
        <h2>New Lead from novi-llc.com 🔥</h2>
        <p><b>Store:</b> ${store}</p>
        <p><b>Revenue:</b> ${revenue}</p>
        <p><b>Email:</b> ${email}</p>
      `,
    });

    if (result.error) {
      console.error("RESEND ERROR:", result.error);
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("SUBSCRIBE ERROR:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
