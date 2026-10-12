import Link from 'next/link'
export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/" className="text-sm text-[#0A2A7A]/60 hover:underline">← Back to NOVI LLC</Link>
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#0A2A7A]">CASE STUDY - 02</p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-[#0A2A7A]">From Spam to Inbox in 72h - Full in 14 Days</h1>
      <div className="mt-3 text-sm text-slate-500">By Floran Dieudonnie — NOVI LLC · 5 min read</div>
      <p className="mt-4 text-lg opacity-70 leading-8">How we took a Shopify brand from 40% spam to 92% inbox in 3 days, and fully recovered 23% revenue in 14 days.</p>
      <div className="mt-10 space-y-6 text-[15px] leading-7 opacity-80">
        <div><strong className="text-[#0A2A7A]">Day 1-2: Diagnosis</strong><br/>SPF fail, DKIM fail, DMARC none. 38% dead list. 12k contacts never engaged. Klaviyo sending to spam trap. Fixed DNS at Cloudflare, cleaned list with 2-step validation, suppressed 38%.</div>
        <div><strong className="text-[#0A2A7A]">Day 3: Quick Win</strong><br/>92% inbox. First sales from spam folder recovered. How? Proper SPF `include:send.klaviyo.com`, 1024-bit DKIM, DMARC `p=none` to monitor, then `p=quarantine`.</div>
        <div><strong className="text-[#0A2A7A]">Day 4-14: Warmup</strong><br/>Warm 100 → 5000 per day. Gmail needs 7-10 days trust. Segment: VIP 180-day engaged only. Then expand to 90-day, 60-day. 23% revenue recovered. $6,800 in 14 days.</div>
        <div className="bg-slate-50 border rounded-xl p-5 mt-8"><strong>Result:</strong> Inbox Radar system works for $5k/mo to $100k/mo stores. Same process.</div>
      </div>
      <Link href="/" className="mt-12 inline-block bg-[#0A2A7A] text-white px-6 py-3 rounded-lg text-sm font-bold">← Back to all insights</Link>
    </main>
  )
}
