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

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
