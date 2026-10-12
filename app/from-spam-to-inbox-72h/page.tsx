import Link from 'next/link'

export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/" className="text-sm hover:underline" style={{color:'#0A2A7A', opacity:0.6}}>← Back to NOVI LLC</Link>

      {/* SAME AS CASE 1 - NOVI BLUE ONLY */}
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold" style={{color:'#0A2A7A', opacity:0.6}}>CASE STUDY - 02</p>

      <h1 className="mt-3 text-4xl font-bold leading-tight" style={{color:'#0A2A7A'}}>From Spam to Inbox in 72h — Full Recovery in 14 Days</h1>

      {/* THIS WAS MISSING - NOW ADDED LIKE CASE 1 */}
      <p className="mt-4 text-sm font-bold" style={{color:'#0A2A7A'}}>By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs" style={{color:'#0A2A7A', opacity:0.6}}>Shopify Agency | E-commerce Growth & Brand Strategy · 5 min read</p>

      <p className="mt-6 text-lg leading-8" style={{color:'#0A2A7A', opacity:0.7}}>
        How we took a Shopify brand from 40% spam to 92% inbox in 3 days, and fully recovered 23% revenue in 14 days.
      </p>

      <div className="mt-10 space-y-8 text-[15px] leading-7" style={{color:'#0A2A7A'}}>
        <div className="border rounded-xl p-5" style={{background:'#0A2A7A08', borderColor:'#0A2A7A15'}}>
          <strong className="block mb-1">Day 1-2: Diagnosis</strong>
          <span style={{opacity:0.8}}>SPF fail, DKIM fail, DMARC none. 38% dead list. Fixed DNS at Cloudflare, cleaned list with 2-step validation, suppressed 38%.</span>
        </div>

        <div className="border rounded-xl p-5" style={{background:'#0A2A7A08', borderColor:'#0A2A7A15'}}>
          <strong className="block mb-1">Day 3: Quick Win — 92% inbox</strong>
          <span style={{opacity:0.8}}>First sales from spam folder recovered.</span>
        </div>

        {/* IMAGES - SAME FOLDER AS CASE 1 IMAGES */}
        <div className="bg-white border rounded-xl p-3" style={{borderColor:'#0A2A7A15'}}>
          <p className="text-xs font-bold uppercase mb-3" style={{color:'#0A2A7A', opacity:0.6}}>Proof 1: Gmail Primary Tab</p>
          <img src="/gmail-primary-proof.jpg" alt="Gmail Primary Proof" className="w-full rounded-lg border" style={{borderColor:'#0A2A7A15'}} />
        </div>

        <div className="bg-white border rounded-xl p-3" style={{borderColor:'#0A2A7A15'}}>
          <p className="text-xs font-bold uppercase mb-3" style={{color:'#0A2A7A', opacity:0.6}}>Proof 2: Inbox Radar Dashboard — 92% inbox rate</p>
          <img src="/inbox-radar-dashboard.jpg" alt="Inbox Radar Dashboard" className="w-full rounded-lg border" style={{borderColor:'#0A2A7A15'}} />
        </div>

        <div className="bg-white border rounded-xl p-3" style={{borderColor:'#0A2A7A15'}}>
          <p className="text-xs font-bold uppercase mb-3" style={{color:'#0A2A7A', opacity:0.6}}>Proof 3: Cart recovery</p>
          <img src="/cart-email-proof.jpg" alt="Cart Email Proof" className="w-full rounded-lg border" style={{borderColor:'#0A2A7A15'}} />
        </div>

        <div className="rounded-xl p-6 text-white" style={{background:'#0A2A7A'}}>
          <strong className="block text-lg mb-2">Result:</strong>
          <p style={{opacity:0.9}}>From 40% spam to 92% inbox in 72 hours. $6,800 recovered in 14 days.</p>
        </div>
      </div>

      <Link href="/" className="mt-12 inline-block px-6 py-3 rounded-full text-sm font-bold text-white" style={{background:'#0A2A7A'}}>← Back to all insights</Link>
    </main>
  )
}
