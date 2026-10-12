import Link from 'next/link'

export const metadata = {
  title: 'How I Fixed a 23% Revenue Leak for a Shopify Brand | NOVI LLC',
  description: 'Most Shopify brands doing $10k-$100k/mo lose 23% revenue to email deliverability. Here is how we fixed it in 72 hours.',
}

export default function Article() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/" className="text-sm text-black/60 hover:text-black">← Back to NOVI LLC</Link>

      <h1 className="text-4xl md:text-5xl font-medium leading-tight mt-8 mb-4">
        How I Fixed a 23% Revenue Leak for a Shopify Brand Doing $40k/mo
      </h1>

      <p className="text-sm text-black/60 mb-10">By Floran Dieudonnie — NOVI LLC • 5 min read</p>

      <div className="space-y-6 text-[17px] leading-8">
        <p>For most Shopify brands doing $10k-$100k/mo, the biggest loss isn't ads.</p>
        <p><strong>It's email deliverability.</strong></p>
        <p>Last month I audited a US apparel brand doing $40k/mo. Klaviyo showed 32% open rates. Looked normal. But when I checked their domain health — SPF, DKIM, and DMARC were misconfigured. Gmail was sending 40% of their flows to Spam.</p>

        <h2 className="text-2xl font-medium mt-12 mb-4">Here is what we fixed in 72 hours:</h2>

        <h3 className="font-bold mt-6">1. Domain Authentication</h3>
        <p>Migrated from shared to dedicated sending domain. Set up proper SPF + DKIM + DMARC with BIMI.</p>

        <h3 className="font-bold mt-6">2. Klaviyo Flow Cleanup</h3>
        <p>Their Welcome Series had 7 emails in 4 days. We rebuilt it to 3 emails with value-first positioning. Unsubscribe rate dropped from 1.2% to 0.3%.</p>

        <h3 className="font-bold mt-6">3. Deliverability Warmup</h3>
        <p>We suppressed unengaged profiles (no open in 90 days) — 8,400 profiles. Counter-intuitive, but deliverability jumped to 99.2%.</p>

        <div className="bg-black/5 border border-black/10 rounded-2xl p-6 mt-10">
          <p className="font-bold m-0">Result:</p>
          <ul className="list-disc pl-5 mt-3 space-y-1">
            <li>Open rate: 32% → 54%</li>
            <li>Recovered revenue from flows: +23% in 14 days ($9,200)</li>
            <li>No extra ad spend</li>
          </ul>
        </div>

        <p className="mt-10">If you are on Shopify and your Klaviyo flows are under 35% of total revenue, you likely have the same leak.</p>
        <p>I do free async Loom teardowns for Shopify brands. 24h turnaround. No pitch.</p>

        <div className="mt-10">
          <Link href="/" className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium">
            Book a free teardown at novi-llc.com
          </Link>
        </div>
      </div>
    </main>
  )
}
