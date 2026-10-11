import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { store, revenue, goal, email } = await req.json();

    if (!store || !revenue || !goal || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "NOVI Leads <info@novi-llc.com>",
      to: process.env.CONTACT_TO!,
      subject: `New Lead: ${store} | ${revenue} | ${goal}`,
      replyTo: email,
      html: `
        <div style="font-family: Inter, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; background: #FFFFFF;">
          
          <div style="background: #0A2A7A; padding: 24px 28px;">
            <h2 style="margin: 0 0 8px; font-size: 20px; font-weight: 800; color: #FFFFFF;">New Client Lead 🚀</h2>
            <p style="margin: 0; font-size: 14px; color: #FFFFFF; opacity: 0.9;">Someone just submitted the audit form on novi-llc.com</p>
          </div>
          
          <div style="padding: 28px; background: #FFFFFF;">
            <div style="background: #FFFFFF; padding: 20px; border-radius: 12px; margin-bottom: 24px; border: 2px solid #0A2A7A;">
              <p style="margin: 0 0 12px; font-size: 14px; color: #0A2A7A;"><span style="color: #0A2A7A; opacity: 0.7;">Store URL:</span> <strong style="color: #0A2A7A;">${store}</strong></p>
              <p style="margin: 0 0 12px; font-size: 14px; color: #0A2A7A;"><span style="color: #0A2A7A; opacity: 0.7;">Monthly Revenue:</span> <strong style="color: #0A2A7A;">${revenue}</strong></p>
              <p style="margin: 0 0 12px; font-size: 14px; color: #0A2A7A;"><span style="color: #0A2A7A; opacity: 0.7;">Your Goal / Reason:</span> <strong style="color: #0A2A7A;">${goal}</strong></p>
              <p style="margin: 0; font-size: 14px; color: #0A2A7A;"><span style="color: #0A2A7A; opacity: 0.7;">Client Email:</span> <strong><a href="mailto:${email}" style="color: #0A2A7A; text-decoration: underline;">${email}</a></strong></p>
            </div>

            <a href="mailto:${email}?subject=Re: Your ${store} Audit Request&body=Hey!%0A%0AThanks for reaching out via novi-llc.com - I saw ${store} doing ${revenue} with goal: ${goal}.%0A%0A" 
               style="background: #0A2A7A; color: #FFFFFF; padding: 14px 28px; border-radius: 10px; text-decoration: none; display: inline-block; font-weight: 700; font-size: 14px;">
               Reply to ${email}
            </a>

            <p style="color: #0A2A7A; opacity: 0.5; font-size: 11px; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">
              This lead was sent via Resend • Signed by novi-llc.com • Reply-To is set to client
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
