import Link from 'next/link'
export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/" className="text-sm hover:underline" style={{color:'#0A2A7A', opacity:0.6}}>← Back to NOVI LLC</Link>

      <p className="mt-8 text-xs tracking-widest uppercase font-semibold" style={{color:'#0A2A7A', opacity:0.6}}>CASE STUDY - 02</p>

      <h1 className="mt-3 text-4xl font-bold leading-tight" style={{color:'#0A2A7A'}}>From Spam to Inbox in 72h — Full Recovery in 14 Days</h1>

      <p className="mt-4 text-sm font-bold" style={{color:'#0A2A7A'}}>By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs" style={{color:'#0A2A7A', opacity:0.6}}>Shopify Agency | E-commerce Growth & Brand Strategy · 5 min read</p>

      <p className="mt-6 text-lg leading-8" style={{color:'#0A2A7A', opacity:0.7}}>
        How we took a Shopify brand from 40% spam to 92% inbox in 3 days, and fully recovered 23% revenue in 14 days.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-7" style={{color:'#0A2A7A'}}>

        <div className="border rounded-xl p-5" style={{background:'#0A2A7A08', borderColor:'#0A2A7A15'}}>
          <strong>Day 1-2: Diagnosis</strong><br/>
          <span style={{opacity:0.8}}>SPF fail, DKIM fail, DMARC none. 38% dead list. Fixed DNS at Cloudflare, cleaned list.</span>
        </div>

        <div className="border rounded-xl p-5" style={{background:'#0A2A7A08', borderColor:'#0A2A7A15'}}>
          <strong>Day 3: Quick Win — 92% inbox</strong><br/>
          <span style={{opacity:0.8}}>First sales from spam folder recovered.</span>
        </div>

        <div className="bg-white border rounded-xl p-3" style={{borderColor:'#0A2A7A15'}}>
          <p className="text-xs font-bold uppercase mb-3" style={{color:'#0A2A7A', opacity:0.6}}>Proof 1: Gmail Primary Tab</p>
          <img src="/gmail-primary-proof.jpg" alt="Gmail Primary" className="w-full rounded-lg border" />
        </div>

        <div className="bg-white border rounded-xl p-3" style={{borderColor:'#0A2A7A15'}}>
          <p className="text-xs font-bold uppercase mb-3" style={{color:'#0A2A7A', opacity:0.6}}>Proof 2: Inbox Radar Dashboard</p>
          <img src="/inbox-radar-dashboard.jpg" alt="Inbox Radar" className="w-full rounded-lg border" />
        </div>

        <div className="bg-white border rounded-xl p-3" style={{borderColor:'#0A2A7A15'}}>
          <p className="text-xs font-bold uppercase mb-3" style={{color:'#0A2A7A', opacity:0.6}}>Proof 3: Cart Recovery</p>
          <img src="/cart-email-proof.jpg" alt="Cart Recovery" className="w-full rounded-lg border" />
        </div>

        <div className="rounded-xl p-6 text-white" style={{background:'#0A2A7A'}}>
          <strong>Result:</strong> 40% spam → 92% inbox in 72h. $6,800 in 14 days.
        </div>
      </div>

      <Link href="/" className="mt-12 inline-block px-6 py-3 rounded-full text-sm font-bold text-white" style={{background:'#0A2A7A'}}>← Back</Link>
    </main>
  )
}
