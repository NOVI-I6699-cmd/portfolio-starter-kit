import Link from 'next/link'
export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/" className="text-sm" style={{color:'#0A2A7A', opacity:0.6}}>Back to NOVI LLC</Link>
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold" style={{color:'#0A2A7A', opacity:0.6}}>STRATEGY - 03</p>
      <h1 className="mt-3 text-4xl font-bold" style={{color:'#0A2A7A'}}>Shopify SEO in 2026</h1>
      <p className="mt-4 text-sm font-bold" style={{color:'#0A2A7A'}}>By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs" style={{color:'#0A2A7A', opacity:0.6}}>Shopify Agency | E-commerce Growth and Brand Strategy - 5 min read</p>
      <p className="mt-6 text-lg" style={{color:'#0A2A7A', opacity:0.7}}>EEAT plus Core Web Vitals is everything in 2026.</p>
      <div className="mt-8 space-y-4 text-[15px]" style={{color:'#0A2A7A'}}>
        <div><strong>1. EEAT for Shopify</strong><br/><span style={{opacity:0.8}}>Add author box, founder story, real address.</span></div>
        <div><strong>2. Collection Schema</strong><br/><span style={{opacity:0.8}}>Fix missing CollectionPage schema and Product schema.</span></div>
        <div><strong>3. Speed</strong><br/><span style={{opacity:0.8}}>LCP under 2.5s. Remove app bloat.</span></div>
      </div>
      <Link href="/" className="mt-12 inline-block px-6 py-3 rounded-full text-sm font-bold text-white" style={{background:'#0A2A7A'}}>Back to all insights</Link>
    </main>
  )
}
