 import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SHEET_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbz3q1h2mXR0XdV-nJQdxJJNQBiPce2RwYnBt0RClCcLghlt0LMhy0gj3mwwsxt2yrhXcQ/exec";

export async function POST(req: Request) {
  try {
    const { store, revenue, goal, email } = await req.json();
    if (!store || !revenue || !goal || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const clientStore = store.replace(/^https?:\/\//i, "").replace(/\/$/, "");
    const clientUrl = `https://${clientStore}`;

    try {
      await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          store: clientStore, revenue, goal, email, 
          timestamp: new Date().toISOString(),
          storeUrl: clientUrl
        }),
      });
    } catch (e) { console.error(e); }

    // INTERNAL EMAIL TO YOU
    await resend.emails.send({
      from: "NOVI Leads <info@novi-llc.com>",
      to: process.env.CONTACT_TO!,
      subject: `New Lead: ${clientStore} | ${revenue} | ${goal}`,
      replyTo: email,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden">
          <div style="background:#0A2A7A;padding:24px 28px">
            <h2 style="margin:0 0 8px;font-size:20px;font-weight:800;color:#fff">New Client Lead 🚀</h2>
            <p style="margin:0;font-size:14px;color:#fff;opacity:.9">New audit on novi-llc.com</p>
          </div>
          <div style="padding:28px;background:#fff">
            <div style="padding:20px;border-radius:12px;border:2px solid #0A2A7A">
              <p style="margin:0 0 12px;font-size:14px;color:#0A2A7A">Store URL: <strong>${clientStore}</strong></p>
              <p style="margin:0 0 12px;font-size:14px;color:#0A2A7A">Revenue: <strong>${revenue}</strong></p>
              <p style="margin:0 0 12px;font-size:14px;color:#0A2A7A">Goal: <strong>${goal}</strong></p>
              <p style="margin:0;font-size:14px;color:#0A2A7A">Email: <strong><a href="mailto:${email}" style="color:#0A2A7A">${email}</a></strong></p>
            </div>
          </div>
        </div>
      `,
    });

    // CLIENT EMAIL - FIXED
    await resend.emails.send({
      from: "Novi LLC <info@novi-llc.com>",
      to: email,
      subject: `Your Shopify audit request is queued — Novi LLC`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden">
          <div style="padding:24px 28px">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px">
              <img src="https://novi-llc.com/novi-logo.jpg" alt="Novi LLC" width="44" height="44" style="width:44px;height:44px;border-radius:50%;object-fit:cover;display:block" />
              <div style="font-weight:800;font-size:16px;color:#0A2A7A">Novi LLC</div>
            </div>
            <div style="font-size:11px;font-weight:700;letter-spacing:1px;color:#0A2A7A;opacity:.7;margin-bottom:8px">✓ AUDIT QUEUED</div>
            <div style="font-size:20px;font-weight:800;color:#0A2A7A;margin-bottom:12px">Got your request.</div>
            <p style="font-size:14px;color:#374151;line-height:22px;margin-bottom:16px">We're reviewing <a href="${clientUrl}" style="color:#0A2A7A;font-weight:700;text-decoration:underline">${clientStore}</a> — thanks.</p>
            <div style="font-size:14px;color:#374151;line-height:24px;margin-bottom:20px">1. Quick check of your checkout + Klaviyo (15 min)<br/>2. We will record a 2-min Loom for you<br/>3. You get it within 12 hours</div>
            <p style="font-size:14px;color:#111827;font-weight:500;margin-bottom:24px">Want the top of the queue? Just reply "YES" — We'll bump you to first.</p>
            <div style="border-top:1px solid #E5E7EB;padding-top:16px;margin-top:24px">
              <p style="font-size:13px;color:#374151;margin:0">Thank you,</p>
              <p style="font-size:13px;font-weight:700;color:#111827;margin:4px 0">Novi LLC</p>
              <p style="font-size:12px;color:#6B7280;margin:0">Shopify Agency | Built in Accra, serving global brands.</p>
              <a href="https://novi-llc.com" style="font-size:12px;color:#0A2A7A;font-weight:600">novi-llc.com</a>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
