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
    const clientEmail = email.toLowerCase().trim();

    // 1. Save to Sheet
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ store: clientStore, storeUrl: clientUrl, revenue, goal, email: clientEmail, timestamp: new Date().toISOString() }),
      });
    } catch (e) { console.error(e); }

    // 2. INTERNAL lead (to you) - complete card - SIZE = 600px
    await resend.emails.send({
      from: "NOVI Leads <info@novi-llc.com>",
      to: process.env.CONTACT_TO!,
      subject: `New Lead: ${clientStore} | ${revenue} | ${goal}`,
      replyTo: clientEmail,
      text: `Store URL: ${clientStore}\nMonthly Revenue: ${revenue}\nYour Goal: ${goal}\nClient Email: ${clientEmail}`,
      html: `<div style="background:#f6f7fb;padding:20px;font-family:Arial"><table style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb"><tr><td style="background:#2E3AC2;padding:18px 24px"><div style="color:#fff;font-weight:800">New Client Lead 🚀</div><div style="color:#c7d2fe;font-size:12px">Someone just submitted the audit form on novi-llc.com</div></td></tr><tr><td style="padding:20px"><div style="border:1px solid #334155;border-radius:8px;padding:16px;font-size:13px;line-height:24px">Store URL: <a href="${clientUrl}" style="color:#2E3AC2;font-weight:700">${clientStore}</a><br>Monthly Revenue: <b>${revenue}</b><br>Your Goal / Reason: <b>${goal}</b><br>Client Email: <a href="mailto:${clientEmail}">${clientEmail}</a></div><a href="mailto:${clientEmail}" style="display:inline-block;margin-top:16px;background:#2E3AC2;color:#fff;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:700">Reply to ${clientEmail}</a><div style="margin-top:18px;font-size:10px;color:#9ca3af">Sent via Resend • Signed by novi-llc.com • Saved to Google Sheet</div></td></tr></table></div>`
    });

    // 3. CLIENT automation - SIZE = 580px
    await resend.emails.send({
      from: "Novi LLC <info@novi-llc.com>",
      to: clientEmail,
      subject: `Your Shopify audit is queued — Novi LLC [${clientStore}]`,
      replyTo: "info@novi-llc.com",
      html: `<!DOCTYPE html><html><body style="margin:0;padding:0;background:#f6f7fb;"><table width="100%" cellpadding="0" cellspacing="0" style="background:#f6f7fb;padding:24px 0;"><tr><td align="center"><table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#fff;border-radius:12px;border:1px solid #e5e7eb;border-left:4px solid #0A2A7A;font-family:Arial,sans-serif;"><tr><td style="padding:28px 32px 0 32px;"><table cellpadding="0" cellspacing="0"><tr><td style="padding-right:12px;"><img src="https://novi-llc.com/novi-logo.jpg" width="44" height="44" style="width:44px;height:44px;border-radius:50%;display:block;border:1px solid #e5e7eb;" alt="Novi"></td><td><div style="font-size:18px;font-weight:800;color:#0A2A7A;">Novi LLC</div><div style="font-size:11px;color:#6b7280;">Shopify Agency | E-commerce Growth and Brand Strategy</div></td></tr></table></td></tr><tr><td style="padding:24px 32px 0 32px;"><div style="display:inline-block;font-size:10px;font-weight:700;color:#0A2A7A;background:#eff6ff;border:1px solid #dbeafe;padding:4px 10px;border-radius:999px;">✓ AUDIT QUEUED</div><h1 style="font-size:20px;font-weight:800;color:#111827;margin:14px 0 0 0;">Got your request — thanks.</h1><p style="font-size:14px;color:#374151;line-height:22px;margin:14px 0 0 0;">We're reviewing <a href="${clientUrl}" style="color:#0A2A7A;font-weight:700;">${clientStore}</a> — thanks.</p><table cellpadding="0" cellspacing="0" style="margin:18px 0 0 0;width:100%;background:#f9fafb;border:1px solid #f0f0f0;border-radius:8px;"><tr><td style="padding:14px 16px;font-size:13px;line-height:22px;"><div><b style="color:#0A2A7A;">1.</b> Quick check of checkout + Klaviyo</div><div><b style="color:#0A2A7A;">2.</b> We record a 2-min Loom</div><div><b style="color:#0A2A7A;">3.</b> You get it within 12 hours</div></td></tr></table><p style="font-size:14px;margin:20px 0 0 0;background:#fffbeb;border:1px solid #fde68a;padding:10px 12px;border-radius:8px;">Want top of queue? Reply <b>"YES"</b> — We bump you first.</p></td></tr><tr><td style="padding:24px 32px 28px 32px;"><div style="border-top:1px solid #eee;padding-top:18px;font-size:13px;color:#4b5563;">Thank you,<br><b>Floran Dieudonnie</b><br>Founder, Novi LLC<br><a href="https://novi-llc.com" style="color:#0A2A7A;font-weight:700;">novi-llc.com</a> | Accra - EST Hours</div></td></tr></table></td></tr></table></body></html>`
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
