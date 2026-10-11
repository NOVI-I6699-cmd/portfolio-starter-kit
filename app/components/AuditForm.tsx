import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

function getAction(goal: string) {
  if (!goal) return "Review lead";
  if (goal.includes("Conversion")) return "💰 CRO LEAD: This client has low conversion. Check PDP, cart, checkout. Send 3 quick wins + pitch CRO Audit.";
  if (goal.includes("Scaling")) return "🔥 SCALING LEAD: High-intent. Wants $100k+. Send scaling case study + Loom teardown of their store. Pitch Scaling Audit.";
  if (goal.includes("Ads")) return "📈 ADS LEAD: ROAS issue. Ask for ad account screenshot. Pitch Paid Ads Audit + Creatives.";
  if (goal.includes("Redesign")) return "🎨 DESIGN LEAD: Wants redesign. Do 2-min Figma audit (hero, PDP). Pitch Redesign + CRO.";
  if (goal.includes("Other")) return "📋 OTHER: Ask what exactly they need, then custom pitch.";
  return "📋 Review store + revenue, then pitch.";
}

export async function POST(req: Request) {
  try {
    const { store, revenue, goal, email } = await req.json();
    const safeGoal = goal || "Not selected";
    const action = getAction(safeGoal);

    await resend.emails.send({
      from: "NOVI Leads <info@novi-llc.com>",
      to: process.env.CONTACT_TO!,
      subject: `New Lead: ${store} | ${safeGoal}`,
      replyTo: email,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;border:1px solid #e5e7eb;border-radius:16px;">
          <h2 style="margin:0 0 6px;">New Client Lead 🚀</h2>
          <p style="margin:0 0 20px;color:#6b7280;font-size:13px;">Form submitted on novi-llc.com</p>
          
          <div style="background:#f9fafb;padding:20px;border-radius:12px;margin-bottom:18px;">
            <p style="margin:0 0 10px;font-size:14px;"><span style="color:#6b7280;">Store:</span> <strong>${store}</strong></p>
            <p style="margin:0 0 10px;font-size:14px;"><span style="color:#6b7280;">Revenue:</span> <strong>${revenue}</strong></p>
            <p style="margin:0 0 10px;font-size
