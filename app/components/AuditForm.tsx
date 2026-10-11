import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

function getAction(goal: string) {
  if (!goal) return "Review lead and send custom audit.";
  if (goal.includes("Conversion")) return "💰 CRO LEAD: Low conversion. Check PDP, cart, checkout. Send 3 quick wins + pitch CRO Audit.";
  if (goal.includes("Scaling")) return "🔥 SCALING LEAD: High-intent $100k+. Send scaling case study + Loom teardown. Pitch Scaling Audit.";
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
      subject: `New Lead: ${store} | ${safeGoal} | ${revenue}`,
      replyTo: email,
      html: `
        <div style="background:#f1f5f9; padding:32px 16px; font-family:Inter, -apple-system, sans-serif;">
          <div style="max-width:560px; margin:0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:20px; overflow:hidden; box-shadow:0 8px 30px rgba(10,42,122,0.
