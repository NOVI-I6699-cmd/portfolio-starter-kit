import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SHEET_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL!;

export async function POST(req: Request) {
  try {
    const { store, revenue, goal, email } = await req.json();
    if (!store || !revenue || !goal || !email) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

    const clientStore = store.replace(/^https?:\/\//i, "").replace(/\/$/, "");
    const clientUrl = `https://${clientStore}`;

    // 1. Save to Sheet
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ store: clientStore, storeUrl: clientUrl, revenue, goal, email, timestamp: new Date().toISOString() }),
      });
    } catch (e) { console.error(e); }

    // 2. INTERNAL ONLY - This triggers your Gmail autoReply
    await resend.emails.send({
      from: "NOVI Leads <info@novi-llc.com>",
      to: process.env.CONTACT_TO!,
      subject: `New Lead: ${clientStore} | ${revenue} | ${goal}`,
      replyTo: email,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden">
          <div style="background:#0A2A7A;padding:24px 28px">
            <h2 style="margin:0;color:#fff">New Client Lead 🚀</h2>
          </div>
          <div style="padding:28px">
            <p>Store URL: <strong>${clientStore}</strong></p>
            <p>Revenue: <strong>${revenue}</strong></p>
            <p>Goal: <strong>${goal}</strong></p>
            <p>Email: <strong>${email}</strong></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
