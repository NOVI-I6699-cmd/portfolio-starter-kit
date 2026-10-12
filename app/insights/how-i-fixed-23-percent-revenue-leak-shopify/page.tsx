import Link from 'next/link'

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/" className="text-sm text-[#0A2A7A]/60">Back to NOVI LLC</Link>

      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#0A2A7A]/60">INBOX RADAR - 01</p>
      
      <h1 className="mt-3 text-4xl font-bold text-[#0A2A7A]">How I Fixed a 23 Percent Revenue Leak for a Shopify Brand Doing 40k per mo</h1>
      
      <p className="mt-4 text-sm font-bold text-[#0A2A7A]">By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs text-[#0A2A7A]/60">Shopify Agency | E-commerce Growth and Brand Strategy - 5 min read</p>
      
      <p className="mt-6 text-lg text-[#0A2A7A]/70">For most Shopify brands doing 10k to 100k per mo, the biggest loss is not ads. It is email deliverability.</p>
      
      <div className="mt-8">
        <div className="border rounded-xl p-5 bg-[#0A2A7A]/[0.03] border-[#0A2A7A]/10">
          <p className="text-[#0A2A7A]"><strong>Result:</strong> Open rate 32 percent to 54 percent. Recovered 23 percent in 14 days.</p>
        </div>
      </div>

      <Link href="/" className="mt-12 inline-block px-6 py-3 rounded-full text-sm font-bold text-white bg-[#0A2A7A]">Back to all insights</Link>
    </main>
  )
}
