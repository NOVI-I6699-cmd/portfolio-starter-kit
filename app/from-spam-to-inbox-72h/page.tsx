import Link from 'next/link'

export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/" className="text-sm text-[#0A2A7A]/60 hover:underline">← Back to NOVI LLC</Link>

      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#8B5E00]">CASE STUDY - 02</p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-[#0A2A7A]">From Spam to Inbox in 72h — Full Recovery in 14 Days</h1>

      {/* REQUIRED BYLINE - ON ALL CASES */}
      <p className="mt-4 text-sm font-bold text-[#0A2A7A]">By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs text-[#0A2A7A]/50">Shopify Agency | E-commerce Growth & Brand Strategy • 5 min read</p>

      <p className="mt-6 text-lg opacity-70 leading-8 text-[#0A2A7A]">
        How we took a Shopify brand from 40% spam to 92% inbox in 3 days, and fully recovered 23% revenue in 14 days.
      </p>

      <div className="mt-10 space-y-10 text-[15px] leading-7 opacity-80 text-[#0A2A7A]">

        <div className="bg-slate-50 border rounded-xl p-5">
          <strong className="text-[#0A2A7A] block mb-1">Day 1-2: Diagnosis</strong>
          SPF fail, DKIM fail, DMARC none. 38% dead list. 12k contacts never engaged. Klaviyo sending to spam traps. Fixed DNS at Cloudflare, cleaned list with 2-step validation, suppressed 38%.
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <strong className="text-green-900 block mb-1">Day 3: Quick Win — 92% inbox</strong>
          First sales from spam folder recovered. Proper SPF, DKIM, DMARC quarantine + list hygiene.
        </div>

        {/* PROOF 1 */}
        <div className="bg-white border rounded-xl p-3 shadow-sm">
          <p className="text-xs font-bold tracking-widest uppercase text-[#0A2A7A]/70 mb-3 px-1">Proof 1: Gmail Primary Tab (Not Spam)</p>
          <img src="/gmail-primary-proof.jpg" alt="Gmail Primary Proof" className="w-full rounded-lg border" loading="eager" />
        </div>

        {/* PROOF 2 */}
        <div className="bg-white border rounded-xl p-3 shadow-sm">
          <p className="text-xs font-bold tracking-widest uppercase text-[#0A2A7A]/70 mb-3 px-1">Proof 2: Inbox Radar Dashboard — 92% inbox rate</p>
          <img src="/inbox-radar-dashboard.jpg" alt="Inbox Radar Dashboard" className="w-full rounded-lg border" loading="eager" />
        </div>

        <div className="bg-slate-50 border rounded-xl p-5">
          <strong className="text-[#0A2A7A] block mb-1">Day 4-14: Warmup</strong>
          Warm 100 → 5000 per day. 23% revenue recovered. $6,800 in 14 days from recovered deliverability.
        </div>

        {/* PROOF 3 */}
        <div className="bg-white border rounded-xl p-3 shadow-sm">
          <p className="text-xs font-bold tracking-widest uppercase text-[#0A2A7A]/70 mb-3 px-1">Proof 3: Cart recovery that converted AFTER inbox fix</p>
          <img src="/cart-email-proof.jpg" alt="Cart Email Proof" className="w-full rounded-lg border" loading="eager" />
        </div>

        <div className="bg-[#0A2A7A] text-white rounded-xl p-6 mt-8">
          <strong className="block text-lg mb-2">Result:</strong>
          <p className="opacity-90">Inbox Radar system works for $5k/mo to $100k/mo stores. From 40% spam to 92% inbox in 72 hours.</p>
          <p className="mt-3 text-sm opacity-70">Want same result? → novillc.com</p>
        </div>
      </div>

      <Link href="/" className="mt-12 inline-block bg-[#0A2A7A] text-white px-6 py-3 rounded-lg text-sm font-bold">← Back to all insights</Link>
    </main>
  )
}
