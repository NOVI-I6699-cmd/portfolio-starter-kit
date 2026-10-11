import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

function getAction(goal: string) {
  if (goal.includes("Conversion")) return "💰 CRO Lead — Check product page, cart, checkout. Send 3 quick wins + pitch CRO Audit.";
  if (goal.includes("Scaling")) return "🔥 Scaling Lead — High intent. Send scaling case study + Loom teardown. Pitch Scaling Audit.";
  if (goal.includes("Ads")) return "📈 Ads Lead — Ask for ad account screenshot. Pitch ROAS Audit + Creatives.";
  if (goal.includes("Redesign")) return "🎨 Design Lead — Quick Figma audit of hero + PDP. Pitch Redesign + CRO.";
  return "📋 Review store + revenue, then custom pitch.";
}

export async function POST(req: Request) {
  try {
    const { store, revenue, goal, email } = await req.json();
    const safeGoal = goal || "Not specified";
    const action = getAction(safeGoal);

    const { error } = await resend.emails.send({
      from: "NOVI Leads <info@novi-llc.com>",
      to: process.env.CONTACT_TO!,
      subject: `New Lead: ${store} | ${safeGoal}`,
      replyTo: email,
      html: `
        <div style="background:#f8fafc; padding:40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;">
          <div style="max-width:560px; margin:0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:20px; overflow:hidden; box-shadow:0 4px 24px rgba(10,42,122,0.06);">
            
            <!-- Header - Novi Brand -->
            <div style="background:#0A2A7A; padding:24px 28px;">
              <p style="margin:0; color:#ffffff; font-size:13px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase;">NOVI • New Client Lead 🚀</p>
              <p style="margin:6px 0 0; color:#c7d2fe; font-size:13px;">Audit form submitted on novi-llc.com</p>
            </div>

            <!-- Body
