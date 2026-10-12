import Link from 'next/link'

export const metadata = {
  title: 'How I Fixed a 23% Revenue Leak for a Shopify Brand | NOVI LLC',
  description: 'Most Shopify brands doing $10k-$100k/mo lose 23% revenue to email deliverability. Here is how we fixed it in 72 hours.',
}

export default function Article() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/" className="text-sm text-[#0A2A7A]/60 hover:underline">← Back to NOVI LLC</Link>

      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#8B5E00]">INBOX RADAR - 01</p>
      <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-[#0A2A7A]">
        How I Fixed a 23% Revenue Leak for a Shopify Brand Doing $40k/mo
      </h1>

      {/* REQUIRED BYLINE - SAME ON ALL CASES */}
      <p className="mt-4 text-sm font-bold text-[#0A2A7A]">By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs text-[#0A2A7A]/50">Shopify Agency | E-commerce Growth & Brand Strategy • 5 min read</p>

      <div className="mt-10 space-y-6 text-[17px] leading-8 text-[#0A2A7A]/80">
        <p>For most Shopify brands doing $10k-$100k/mo, the biggest loss isn't ads.</p>
        <p><strong className="text-[#0A2A7A]">It's email deliverability.</strong></p>
        <p>Last month I audited a US apparel brand doing $40k/mo. Klaviyo showed 32% open rates. Looked normal. But when I checked their domain health — SPF, DKIM, and DMARC were misconfigured. Gmail was sending 40% of their flows to Spam.</p>

        <h2 className="text-2xl font-bold mt-12 mb-4 text-[#0A2A7A]">Here is what we fixed in 72 hours:</h2>

        <h3 className="font-bold mt-6 text-[#0A2A7A]">1. Domain Authentication</h3>
        <p>Migrated from shared to dedicated sending domain. Set up proper SPF + DKIM + DMARC with BIMI.</p>

        <h3 className="font-bold mt-6 text-[#0A2A7A]">2. Klaviyo Flow Cleanup</h3>
        <p>Their Welcome Series had 7 emails in 4 days. We rebuilt it to 3 emails with value-first positioning. Unsubscribe rate dropped from 1.2% to 0.3%.</p>

        <h3 className="font-bold mt-6 text-[#0A2A7A]">3. Deliverability Warmup</h3>
        <p>We suppressed unengaged profiles (no open in 90 days) — 8,400 profiles. Counter-intuitive, but deliverability jumped to 99.2%.</p>

        <div className="bg-slate-50 border rounded-2xl p-6 mt-10">
          <p className="font-bold m-0 text-[#0A2A7A]">Result:</p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li>Open rate: 32% → 54%</li>
            <li>Recovered revenue from flows: +23% in 14 days ($9,200)</li>
            <li>No extra ad spend</li>
          </ul>
        </div>

        <p className="mt-10">If you are on Shopify and your Klaviyo flows are under 35% of total revenue, you likely have the same leak.</p>
        <p>I do free async Loom teardowns for Shopify brands. 24h turnaround. No pitch.</p>

        <div className="mt-10">
          <Link href="/" className="inline-block bg-[#0A2A7A] text-white px-6 py-3 rounded-lg text-sm font-bold">
            Book a free teardown at novi-llc.com
          </Link>
        </div>
      </div>
    </main>
  )
}
