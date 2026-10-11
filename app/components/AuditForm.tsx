import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { store, revenue, goal, email } = await req.json();

  const html = `
  <!DOCTYPE html>
  <html>
  <body style="margin:0; padding:0; background:#f5f5f7; font-family: Arial, sans-serif;">
    <div style="max-width:580px; margin:30px auto; background:#FFFFFF; border-radius:16px; overflow:hidden; border:1px solid #e5e7eb;">
      
      <!-- HEADER - NOVI BLUE #0A2A7A -->
      <div style="background-color:#0A2A7A; padding:24px 28px;">
        <h1 style="color:#FFFFFF; margin:0; font-size:20px; font-weight:800;">New Client Lead 🚀</h1>
        <p style="color:#FFFFFF; margin:8px 0 0 0; font-size:14px;">Someone just submitted the audit form on novi-llc.com</p>
      </div>

      <!-- BODY - NOVI COLORS -->
      <div style="padding:28px; background:#FFFFFF;">
        <div style="background:#FFFFFF; border:2px solid #0A2A7A; border-radius:12px; padding:20px;">
          <p style="margin:0 0 12px 0; font-size:14px; color:#0A2A7A;"><strong style="color:#0A2A7A;">Store URL:</strong> ${store}</p>
          <p style="margin:0 0 12px 0; font-size:14px; color:#0A2A7A;"><strong style="color:#0A2A7A;">Monthly Revenue:</strong> ${revenue}</p>
          <p style="margin:0 0 12px 0; font-size:14px; color:#0A2A7A;"><strong style="color:#0A2A7A;">Your Goal / Reason:</strong> ${goal}</p>
          <p style="margin:0; font-size:14px; color:#0A2A7A;"><strong style="color:#0A2A7A;">Client Email:</strong> ${email}</p>
        </div>

        <!-- BUTTON - NOVI BLUE #0A2A7A + WHITE #FFFFFF -->
        <a href="mailto:${email}" style="display:block; width:100%; background-color:#0A2A7A; color:#FFFFFF; text-align:center; padding:16px; border-radius:10px; font-weight:bold; font-size:15px; text-decoration:none; margin-top:24px; box-sizing:border-box;">
          Reply to ${email}
        </a>

        <p style="color:#0A2A7A; opacity:0.6; font-size:11px; margin-top:20px; text-align:center;">This lead was sent via Resend • Signed by novi-llc.com</p>
      </div>
    </div>
  </body>
  </html>
  `;

  await resend.emails.send({
    from: "NOVI Leads <leads@novi-llc.com>",
    to: process.env.LEAD_TO_EMAIL!,
    subject: `New Lead: ${store} | ${revenue} | ${goal}`,
    html,
    replyTo: email,
  });

  return NextResponse.json({ ok: true });
}
