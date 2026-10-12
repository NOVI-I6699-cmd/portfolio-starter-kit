import Link from 'next/link'

export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/" className="text-sm text-[#0A2A7A]/60 hover:underline">← Back to NOVI LLC</Link>

      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#8B5E00]">CASE STUDY - 02</p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-[#0A2A7A] tracking-tight">
        From Spam to Inbox in 72h - Full in 14 Days
      </h1>

      {/* AUTHOR LINE */}
      <div className="mt-4 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-[#0A2A7A] text-white flex items-center justify-center text-xs font-bold">FD</div>
        <div className="text-[13px] leading-4">
          <p className="font-semibold text-[#0A2A7A]">By Floran Dieudonnie - NOVI LLC</p>
          <p className="text-[#0A2A7A]/50">Email Deliverability • 5 min read • Feb 2026</p>
        </div>
      </div>

      <p className="mt-6 text-lg opacity-70 leading-8">
        How we took a Shopify brand from 40% spam to 92% inbox in 3 days, and fully recovered 23% revenue in 14 days.
      </p>

      <div className="mt-10 space-y-10 text-[15px] leading-7 opacity-80">
        <div>
          <strong className="text-[#0A2A7A] text-[16px]">Day 1-2: Diagnosis</strong>
          <p className="mt-2">SPF fail, DKIM fail, DMARC none. 38% dead list. 12k contacts never engaged. Klaviyo sending to spam trap. Fixed DNS at Cloudflare, cleaned list with 2-step validation, suppressed 38%.</p>
        </div>

        <div>
          <strong className="text-[#0A2A7A] text-[16px]">Day 3: Quick Win — 92% Inbox</strong>
          <p className="mt-2">First sales from spam folder recovered. How? Proper SPF <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">include:send.klaviyo.com</code>, 1024-bit DKIM, DMARC <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">p=none</code> to monitor, then <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">p=quarantine</code>.</p>
        </div>

        {/* PROOF 1 */}
        <div className="opacity-100 not-prose">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0A2A7A]/60 mb-3">Proof 1: Gmail Primary Tab (Live)</p>
          <div className="overflow-hidden rounded-xl border shadow-sm bg-white">
            <img src="/gmail-primary-proof.webp" alt="Gmail Primary Proof" className="w-full" />
          </div>
        </div>

        {/* PROOF 2 */}
        <div className="opacity-100 not-prose">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0A2A7A]/60 mb-3">Proof 2: Inbox Radar Dashboard - 92% inbox</p>
          <div className="overflow-hidden rounded-xl border shadow-sm bg-white">
            <img src="/inbox-radar-dashboard.webp" alt="Inbox Radar Dashboard" className="w-full" />
          </div>
        </div>

        <div>
          <strong className="text-[#0A2A7A] text-[16px]">Day 4-14: Warmup & Revenue Recovery</strong>
          <p className="mt-2">Warm 100 → 5000 per day. Gmail needs 7-10 days trust. Segment: VIP 180-day engaged only. Then expand to 90-day, 60-day. 23% revenue recovered. $6,800 in 14 days.</p>
        </div>

        {/* PROOF 3 */}
        <div className="opacity-100 not-prose">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0A2A7A]/60 mb-3">Proof 3: Cart recovery that converted after inbox fix</p>
          <div className="overflow-hidden rounded-xl border shadow-sm bg-white">
            <img src="/cart-email-proof.webp" alt="Cart Email Proof" className="w-full" />
          </div>
        </div>

        <div className="bg-[#0A2A7A]/[0.04] border border-[#0A2A7A]/10 rounded-xl p-5 mt-8 opacity-100">
          <strong className="text-[#0A2A7A]">Result:</strong> Inbox Radar system works for $5k/mo to $100k/mo stores. Same process. Diagnosis → Fix DNS → Clean → Warmup.
        </div>
      </div>

      <Link href="/" className="mt-12 inline-block bg-[#0A2A7A] text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-[#0A2A7A]/90 transition">
        ← Back to all insights
      </Link>
    </main>
  )
}
