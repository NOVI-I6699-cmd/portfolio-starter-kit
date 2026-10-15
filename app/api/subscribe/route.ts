import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SHEET_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL!;

export async function POST(req: Request) {
  try {
    const { store, revenue, goal, email } = await req.json();
    if (!store || !revenue || !goal || !email) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const clientStore = store.replace(/^https?:\/\//i, "").replace(/\/$/, "").split(/\s+/)[0];
    const clientUrl = `https://${clientStore}`;

    // 1. Save to Sheet
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ store: clientStore, storeUrl: clientUrl, revenue, goal, email, timestamp: new Date().toISOString() }),
      });
    } catch (e) { console.error(e); }

    // 2. INTERNAL — This triggers your Gmail autoReply
    await resend.emails.send({
      from: "NOVI Leads <info@novi-llc.com>",
      to: process.env.CONTACT_TO!,
      subject: `New Lead: ${clientStore} | ${revenue} | ${goal}`,
      replyTo: email,
      // Text version controls what GmailApp.getPlainBody() sees — no double URL
      text: `New Client Lead\nStore URL: ${clientStore}\nMonthly Revenue: ${revenue}\nYour Goal / Reason: ${goal}\nClient Email: ${email}\nReply to: ${email}`,
      html: `
        <div style="margin:0;padding:0;background:#f6f7fb;font-family:Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;"><tr><td align="center">
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;text-align:left;">
              <tr><td style="background:#2E3AC2;padding:18px 24px;">
                <div style="font-size:16px;font-weight:800;color:#ffffff;">New Client Lead 🚀</div>
                <div style="font-size:12px;color:#c7d2fe;margin-top:4px;">Someone just submitted the audit form on novi-llc.com</div>
              </td></tr>
              <tr><td style="padding:20px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #334155;border-radius:8px;"><tr><td style="padding:16px 18px;font-size:13px;line-height:24px;color:#111827;">
                  <div>Store URL: <a href="${clientUrl}" style="color:#2E3AC2;font-weight:700;">${clientStore}</a></div>
                  <div>Monthly Revenue: <b>${revenue}</b></div>
                  <div>Your Goal / Reason: <b>${goal}</b></div>
                  <div>Client Email: <a href="mailto:${email}" style="color:#111827;font-weight:700;">${email}</a></div>
                </td></tr></table>
                <div style="margin-top:16px;">
                  <a href="mailto:${email}?subject=Re:%20Your%20Shopify%20Audit%20-%20${clientStore}" style="display:inline-block;background:#2E3AC2;color:#fff;font-size:13px;font-weight:700;padding:10px 18px;border-radius:6px;text-decoration:none;">Reply to ${email}</a>
                </div>
                <div style="margin-top:18px;font-size:10px;color:#9ca3af;">This lead was sent via Resend • Signed by novi-llc.com • Reply-To is set to client • Saved to Google Sheet</div>
              </td></tr>
            </table>
          </td></tr></table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
