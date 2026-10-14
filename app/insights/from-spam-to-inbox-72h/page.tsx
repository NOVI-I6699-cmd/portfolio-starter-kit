import Link from 'next/link'
export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/#case-studies" className="text-sm text-[#0A2A7A]/60 hover:text-[#0A2A7A]">← Back to Case Studies</Link>
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#0A2A7A]/60">CASE STUDY - 02</p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-[#0A2A7A]">From Spam to Inbox in 72h - Full Recovery in 14 Days</h1>
      <p className="mt-4 text-sm font-bold text-[#0A2A7A]">By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs text-[#0A2A7A]/60">Shopify Agency | E-commerce Growth and Brand Strategy - 9 min read</p>
      <p className="mt-6 text-lg leading-relaxed text-[#0A2A7A]/70">How we took a Shopify brand from 40 percent spam to 92 percent inbox in 3 days, and full revenue recovery in 14 days.</p>

      <div className="mt-10 space-y-10 text-[15.5px] leading-7 text-[#0A2A7A]/90">
        <div className="border border-[#0A2A7A]/10 rounded-2xl p-6 bg-[#0A2A7A]/5">
          <p className="text-sm font-bold text-[#0A2A7A]">Result</p>
          <p className="mt-2 text-sm"><span className="opacity-60">Day 0:</span> 40% spam, Gmail Promotions + Spam</p>
          <p className="text-sm"><span className="opacity-60">Day 3:</span> 92% inbox, Gmail Primary tab</p>
          <p className="text-sm"><span className="opacity-60">Day 14:</span> Open rate 61%, +$11.4k recovered revenue</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0A2A7A]">72 Hour Protocol</h2>
          <p className="mt-3 opacity-80"><strong>Hour 0-12:</strong> Paused campaigns, suppressed 11k cold contacts.<br/><strong>Hour 12-36:</strong> New subdomain mail.getnovi.com, fixed SPF/DKIM/DMARC.<br/><strong>Hour 36-72:</strong> Sent only to 1.2k super-engaged, plain text, 71% open.</p>
        </div>

        <div className="space-y-8">
          <div className="bg-white border border-[#0A2A7A]/10 rounded-xl p-3">
            <p className="text-xs font-bold uppercase mb-3 text-[#0A2A7A]/60">Proof 1: Inbox Radar Dashboard - 92% Inbox</p>
            <img src="/inbox-radar-dashboard.jpg" alt="Inbox Radar Dashboard" className="w-full rounded-lg border border-black/5 block" />
            <p className="mt-2 text-xs text-[#0A2A7A]/60">GlockApps: Inbox rate 52% → 92% in 72h.</p>
          </div>

          <div className="bg-white border border-[#0A2A7A]/10 rounded-xl p-3">
            <p className="text-xs font-bold uppercase mb-3 text-[#0A2A7A]/60">Proof 2: Gmail Primary Tab</p>
            <img src="/gmail-primary-proof.jpg" alt="Gmail Primary Tab" className="w-full rounded-lg border border-black/5 block" />
            <p className="mt-2 text-xs text-[#0A2A7A]/60">Before: Promotions. After: Primary with star — Day 3.</p>
          </div>

          <div className="bg-white border border-[#0A2A7A]/10 rounded-xl p-3">
            <p className="text-xs font-bold uppercase mb-3 text-[#0A2A7A]/60">Proof 3: Cart Recovery Flow - Info@novi-llc.com - 1234, Accra, Ghana</p>
            <img src="/cart-email-proof.jpg" alt="Cart Recovery Flow - Info@novi-llc.com Accra Ghana" className="w-full rounded-lg border border-black/5 block" />
            <p className="mt-2 text-xs text-[#0A2A7A]/60">Same flow, 18% to 44% open after deliverability fix. No copy change. NOVI LLC • 1234, Accra, Ghana • Info@novi-llc.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0A2A7A]">14 Day Full Recovery</h2>
          <p className="mt-3 opacity-80">After Primary tab win, we scaled to engaged 30d, then 60d. Day 14 email was 31% of total revenue that day.</p>
        </div>
      </div>

      {/* SAME BUTTON AS YOUR CIRCLED CASE 04 */}
      <Link href="/#case-studies" className="mt-12 inline-flex border px-6 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition" style={{borderColor: '#0A2A7A', color: '#0A2A7A'}}>
        ← Back to Case Studies Heading
      </Link>
    </main>
  )
}
