import Link from 'next/link'
export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/" className="text-sm text-[#0A2A7A]/60">Back to NOVI LLC</Link>
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#0A2A7A]/60">CASE STUDY - 02</p>
      <h1 className="mt-3 text-4xl font-bold text-[#0A2A7A]">From Spam to Inbox in 72h - Full Recovery in 14 Days</h1>
      <p className="mt-4 text-sm font-bold text-[#0A2A7A]">By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs text-[#0A2A7A]/60">Shopify Agency | E-commerce Growth and Brand Strategy - 5 min read</p>
      <p className="mt-6 text-lg text-[#0A2A7A]/70">How we took a Shopify brand from 40 percent spam to 92 percent inbox in 3 days.</p>
      <div className="mt-10 space-y-8">
        <div className="bg-white border border-[#0A2A7A]/10 rounded-xl p-3">
          <p className="text-xs font-bold uppercase mb-3 text-[#0A2A7A]/60">Proof 1: Gmail Primary Tab</p>
          <img src="/gmail-primary-proof.jpg" alt="Gmail Primary" className="w-full rounded-lg" />
        </div>
        <div className="bg-white border border-[#0A2A7A]/10 rounded-xl p-3">
          <p className="text-xs font-bold uppercase mb-3 text-[#0A2A7A]/60">Proof 2: Inbox Radar Dashboard</p>
          <img src="/inbox-radar-dashboard.jpg" alt="Inbox Radar" className="w-full rounded-lg" />
        </div>
        <div className="bg-white border border-[#0A2A7A]/10 rounded-xl p-3">
          <p className="text-xs font-bold uppercase mb-3 text-[#0A2A7A]/60">Proof 3: Cart Recovery</p>
          <img src="/cart-email-proof.jpg" alt="Cart Recovery" className="w-full rounded-lg" />
        </div>
      </div>
      <Link href="/" className="mt-12 inline-block px-6 py-3 rounded-full text-sm font-bold text-white bg-[#0A2A7A]">Back to all insights</Link>
    </main>
  )
}
