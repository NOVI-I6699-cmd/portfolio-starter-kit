import Link from 'next/link'
export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/" className="text-sm text-[#0A2A7A]/60 hover:underline">← Back to NOVI LLC</Link>
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold">STRATEGY - 03</p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-[#0A2A7A]">Shopify SEO in 2026</h1>
      <p className="mt-4 text-lg opacity-70 leading-8">EEAT + Core Web Vitals is everything. Google’s new update killed 40% of Shopify traffic that ignored it.</p>
      <div className="mt-10 space-y-6 text-[15px] leading-7 opacity-80">
        <div><strong className="text-[#0A2A7A]">1. EEAT for Shopify</strong><br/>Add author box, founder story, real address (Accra + EST), About page with LinkedIn. Product pages need UGC reviews, FAQ schema, how-to schema.</div>
        <div><strong className="text-[#0A2A7A]">2. Collection Schema</strong><br/>Fix missing `CollectionPage` schema, `Product` schema with `aggregateRating`, `BreadcrumbList`. We add via custom liquid, not app.</div>
        <div><strong className="text-[#0A2A7A]">3. Speed</strong><br/>Core Web Vitals: LCP under 2.5s. Lazy load, remove app bloat, critical CSS. Works for $5k to $100k stores.</div>
        <div className="bg-slate-50 border rounded-xl p-5 mt-8"><strong>What we do:</strong> Audit → Schema fix → Speed → UGC. $5k stores get $1,150/mo SEO traffic back. $100k stores get $23k/mo back.</div>
      </div>
      <Link href="/" className="mt-12 inline-block bg-[#0A2A7A] text-white px-6 py-3 rounded-lg text-sm font-bold">← Back to all insights</Link>
    </main>
  )
}
