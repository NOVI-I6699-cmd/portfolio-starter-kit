import Link from 'next/link'

export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/" className="text-sm hover:underline" style={{color:'#0A2A7A', opacity:0.6}}>← Back to NOVI LLC</Link>

      {/* FIXED: WAS GOLD #8B5E00 → NOW NOVI BLUE #0A2A7A 60% */}
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold" style={{color:'#0A2A7A', opacity:0.6}}>CASE STUDY - 02</p>

      <h1 className="mt-3 text-4xl font-bold leading-tight" style={{color:'#0A2A7A'}}>From Spam to Inbox in 72h — Full Recovery in 14 Days</h1>

      <p className="mt-4 text-sm font-bold" style={{color:'#0A2A7A'}}>By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs" style={{color:'#0A2A7A', opacity:0.5}}>Shopify Agency | E-commerce Growth & Brand Strategy • 5 min read</p>

      <p className="mt-6 text-lg leading-8" style={{color:'#0A2A7A', opacity:0.7}}>
        How we took a Shopify brand from 40% spam to 92% inbox in 3 days, and fully recovered 23% revenue in 14 days.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-7" style={{color:'#0A2A7A'}}>

        <div className="border rounded-xl p-5" style={{background:'#0A2A7A08', borderColor:'#0A2A7A15'}}>
          <strong className="block mb-1">Day 1-2: Diagnosis</strong>
          <span style={{opacity:0.8}}>SPF fail, DKIM fail, DMARC none. 38% dead list. 12k contacts never engaged. Klaviyo sending to spam traps. Fixed DNS at Cloudflare, cleaned list with 2-step validation, suppressed 38%.</span>
        </div>

        <div className="border rounded-xl p-5" style={{background:'#0A2A7A08', borderColor:'#0A2A7A15'}}>
          <strong className="block mb-1">Day 3: Quick Win — 92% inbox</strong>
          <span style={{opacity:0.8}}>First sales from spam folder recovered. Proper SPF, DKIM, DMARC quarantine + list hygiene.</span>
        </div>

        {/* IMAGES WILL SHOW - ONLY NOVI COLORS */}
        <div className="bg-white border rounded-xl p-3 shadow-sm" style={{borderColor:'#0A2A7A15'}}>
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'#0A2A7A', opacity:0.6}}>Proof 1: Gmail Primary Tab (Not Spam)</p>
          <img src="/gmail-primary-proof.jpg" alt="Gmail Primary Proof" className="w-full rounded-lg border" style={{borderColor:'#0A2A7A15'}} loading="eager" />
        </div>

        <div className="bg-white border rounded-xl p-3 shadow-sm" style={{borderColor:'#0A2A7A15'}}>
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'#0A2A7A', opacity:0.6}}>Proof 2: Inbox Radar Dashboard — 92% inbox rate</p>
          <img src="/inbox-radar-dashboard.jpg" alt="Inbox Radar Dashboard" className="w-full rounded-lg border" style={{borderColor:'#0A2A7A15'}} loading="eager" />
        </div>

        <div className="border rounded-xl p-5" style={{background:'#0A2A7A08', borderColor:'#0A2A7A15'}}>
          <strong className="block mb-1">Day 4-14: Warmup</strong>
          <span style={{opacity:0.8}}>Warm 100 → 5000 per day. 23% revenue recovered. $6,800 in 14 days from recovered deliverability.</span>
        </div>

        <div className="bg-white border rounded-xl p-3 shadow-sm" style={{borderColor:'#0A2A7A15'}}>
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{color:'#0A2A7A', opacity:0.6}}>Proof 3: Cart recovery that converted AFTER inbox fix</p>
          <img src="/cart-email-proof.jpg" alt="Cart Email Proof" className="w-full rounded-lg border" style={{borderColor:'#0A2A7A15'}} loading="eager" />
        </div>

        <div className="rounded-xl p-6 mt-8 text-white" style={{background:'#0A2A7A'}}>
          <strong className="block text-lg mb-2">Result:</strong>
          <p style={{opacity:0.9}}>Inbox Radar system works for $5k/mo to $100k/mo stores. From 40% spam to 92% inbox in 72 hours.</p>
          <p className="mt-3 text-sm" style={{opacity:0.7}}>Want same result? → novillc.com</p>
        </div>
      </div>

      <Link href="/" className="mt-12 inline-block px-6 py-3 rounded-lg text-sm font-bold text-white" style={{background:'#0A2A7A'}}>← Back to all insights</Link>
    </main>
  )
}
