import Link from 'next/link'
export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/#case-studies" className="text-sm text-[#0A2A7A]/60 hover:text-[#0A2A7A] transition-colors">← Back to Case Studies</Link>
      
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#0A2A7A]/60">INBOX RADAR - 01</p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-[#0A2A7A]">How I Fixed a 23 Percent Revenue Leak for a Shopify Brand Doing 40k per mo</h1>
      <p className="mt-4 text-sm font-bold text-[#0A2A7A]">By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs text-[#0A2A7A]/60">Shopify Agency | E-commerce Growth and Brand Strategy - 8 min read</p>

      <p className="mt-8 text-lg leading-relaxed text-[#0A2A7A]/70">For most Shopify brands doing 10k to 100k per mo, the biggest loss is not ads. It is email deliverability. This brand was leaving $9,200 per month on the table.</p>

      <div className="mt-10 space-y-10 text-[15.5px] leading-7 text-[#0A2A7A]/90">
        <div className="border border-[#0A2A7A]/10 rounded-2xl p-6 bg-[#0A2A7A]/5">
          <p className="text-sm font-bold text-[#0A2A7A]">The Snapshot</p>
          <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
            <div><span className="opacity-60">Before:</span> <br/><strong>32% Open Rate, 40% Spam</strong></div>
            <div><span className="opacity-60">After:</span> <br/><strong>54% Open Rate, 92% Inbox</strong></div>
            <div><span className="opacity-60">Revenue Recovered:</span> <br/><strong>23% in 14 Days</strong></div>
            <div><span className="opacity-60">Stack:</span> <br/><strong>Klaviyo + Shopify</strong></div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0A2A7A]">1. The Leak</h2>
          <p className="mt-3 opacity-80">Brand came to us doing $40k/mo. Klaviyo showed 12% of total revenue from email. For a brand at this stage, it should be 25-35%. I checked deliverability: 40% of campaigns landing in spam on Gmail, 62% on Yahoo. Open rate collapsed from 48% to 32% in 6 weeks.</p>
          <p className="mt-3 opacity-80">They thought it was copywriting. It wasn't.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0A2A7A]">2. The Diagnosis - 3 Root Causes</h2>
          <ul className="mt-3 space-y-3 opacity-80 list-disc pl-5">
            <li><strong>Unsegmented Sends:</strong> Sending to 18k list including 9k unengaged. ISPs flagged as spammy sender.</li>
            <li><strong>Broken Authentication:</strong> SPF soft-fail, DMARC p=none, shared domain.</li>
            <li><strong>Spam Trigger Content:</strong> All caps subject lines, 5 links + 3 images with heavy promo words.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0A2A7A]">3. The NOVI Fix - Inbox Radar System</h2>
          <div className="mt-3 space-y-3 opacity-80">
            <p><strong>Day 1: List Surgery.</strong> Suppressed everyone who didn't open in 90 days. Created engaged segment of 7.2k. Reputation instantly improved.</p>
            <p><strong>Day 2: Tech Fix.</strong> Dedicated sending domain, fixed SPF/DKIM/DMARC to p=quarantine, warmed domain 14 days, implemented Google Postmaster.</p>
            <p><strong>Day 3-7: Content Rehab.</strong> 1 link per email, text-based, value first. Resend to non-openers only after 48h with new subject.</p>
            <p><strong>Day 7-14: Revenue Recovery.</strong> Rebuilt 3 flows: Abandoned Checkout (3 steps), Browse Abandon (2 steps), Post-Purchase Cross-sell. All segmented.</p>
          </div>
        </div>

        <div className="border border-[#0A2A7A]/10 rounded-2xl p-6 bg-white">
          <p className="text-sm font-bold text-[#0A2A7A]">Result after 14 days</p>
          <p className="mt-2 opacity-80">Open rate 32% to 54%. Click rate 1.1% to 2.8%. Email revenue from $4.8k to $14k/mo. Total store: $40k to $49.2k without extra ad spend. That's the 23% leak fixed.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0A2A7A]">Takeaway</h2>
          <p className="mt-3 opacity-80">If you are under 40% open rate on engaged segment, you have a deliverability problem, not a copy problem. Fix list, fix tech, then fix content. In that order.</p>
        </div>
      </div>

      {/* SAME AS YOUR CIRCLED CASE 04 */}
      <Link href="/#case-studies" className="mt-12 inline-flex border px-6 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition" style={{borderColor: '#0A2A7A', color: '#0A2A7A'}}>
        ← Back to Case Studies Heading
      </Link>
    </main>
  )
}
