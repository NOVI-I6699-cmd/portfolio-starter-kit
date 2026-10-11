import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { store, revenue, goal, email } = await req.json();

  // Force brand colors - this WILL show blue in Gmail
  const html = `
  <div style="font-family: Arial, sans-serif; background-color: #f4f5f7; padding: 30px;">
    <div style="max-width: 560px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; border: 1px solid #E5E7EB;">
      
      <!-- HEADER BLUE -->
      <div style="background-color: #0A2A7A; padding: 24px 28px;">
        <h1 style="color: #FFFFFF; margin: 0; font-size: 20px; font-weight: bold;">New Client Lead 🚀</h1>
        <p style="color: #FFFFFF; margin: 8px 0 0 0; font-size: 14px;">Someone just submitted the audit form on novi-llc.com</p>
      </div>

      <!-- CARD WHITE + BLUE TEXT -->
      <div style="padding: 28px;">
        <div style="background-color: #FFFFFF; border: 2px solid #0A2A7A; border-radius: 12px; padding: 20px;">
          <p style="color: #0A2A7A; font-size: 14px; margin: 0 0 10px 0;"><strong style="color: #0A2A7A;">Store URL:</strong> <span style="color: #0A2A7A; font-weight: bold;">${store}</span></p>
          <p style="color: #0A2A7A; font-size: 14px; margin: 0 0 10px 0;"><strong style="color: #0A2A7A;">Monthly Revenue:</strong> <span style="color: #0A2A7A;">${revenue}</span></p>
          <p style="color: #0A2A7A; font-size: 14px; margin: 0 0 10px 0;"><strong style="color: #0A2A7A;">Your Goal / Reason:</strong> <span style="color: #0A2A7A; font-weight: bold;">${goal}</span></p>
          <p style="color: #0A2A7A; font-size: 14px; margin: 0;"><strong style="color: #0A2A7A;">Client Email:</strong> <span style="color: #0A2A7A; font-weight: bold;">${email}</span></p>
        </div>

        <!-- BUTTON BLUE - This fixes your grey button -->
        <a href="mailto:${email}" style="display: block; width: 100%; background-color: #0A2A7A; color: #FFFFFF; text-align: center; padding: 16px 20px; border-radius: 10px; font-weight: bold; font-size: 15px; text-decoration: none; margin-top: 24px;">
          Reply to ${email}
        </a>

        <p style="color: #0A2A7A; opacity: 0.5; font-size: 11px; margin-top: 20px; text-align: center;">This lead was sent via Resend • Signed by novi-llc.com • Reply-To is set to client</p>
      </div>
    </div>
  </div>
  `;

  try {
    await resend.emails.send({
      from: "NOVI Leads <leads@novi-llc.com>",
      to: process.env.LEAD_TO_EMAIL!,
      subject: `New Lead: ${store} | ${revenue} | ${goal}`,
      html: html,
      replyTo: email,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
