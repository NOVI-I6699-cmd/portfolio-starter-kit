import Link from 'next/link'
export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/#case-studies" className="text-sm text-[#0A2A7A]/60 hover:text-[#0A2A7A]">Back to Case Studies</Link>
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#0A2A7A]/60">STRATEGY - 03</p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-[#0A2A7A]">Shopify SEO in 2026 - EEAT, Schema, and Speed</h1>
      <p className="mt-4 text-sm font-bold text-[#0A2A7A]">By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs text-[#0A2A7A]/60">Shopify Agency | E-commerce Growth and Brand Strategy - 12 min read</p>
      <p className="mt-6 text-lg leading-relaxed text-[#0A2A7A]/70">EEAT plus Core Web Vitals is everything in 2026. Shopify brands that win organic are not doing more blogs. They are doing better trust and faster sites. Here is the full playbook we use for 7-figure Shopify brands.</p>

      <div className="mt-10 space-y-10 text-[15.5px] leading-7 text-[#0A2A7A]/90">
        <div className="border border-[#0A2A7A]/10 rounded-2xl p-6 bg-[#0A2A7A]/5">
          <p className="text-sm font-bold text-[#0A2A7A]">2026 Shopify SEO Stack - TLDR</p>
          <div className="mt-3 space-y-1 text-sm opacity-80">
            <p>EEAT signals on every money page</p>
            <p>Product + Collection + FAQ Schema</p>
            <p>LCP under 2.5s on mobile</p>
            <p>Internal linking for collections</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0A2A7A]">1. EEAT for Shopify - The #1 Ranking Factor</h2>
          <p className="mt-3 opacity-80">Google's Quality Rater Guidelines now hit Shopify hard. If you sell wellness, beauty, supplements - you need real trust.</p>
          <ul className="mt-3 space-y-3 opacity-80 list-disc pl-5">
            <li><strong>Author Box:</strong> Every article needs author with photo, LinkedIn, credentials. Not "NOVI Team". Real person.</li>
            <li><strong>Founder Story Page:</strong> /pages/about-us with real address, real photos, not stock. Link to Crunchbase, LinkedIn.</li>
            <li><strong>Contact + Policy:</strong> Real phone, real email in footer, shipping/return with dates updated 2026.</li>
            <li><strong>UGC Proof:</strong> Add review schema + real customer photos on product pages.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0A2A7A]">2. Collection Schema - Where Most Brands Lose</h2>
          <p className="mt-3 opacity-80">Shopify auto-adds Product schema, but 90% of stores have broken CollectionPage schema.</p>
          <div className="mt-3 rounded-xl border border-[#0A2A7A]/10 p-4 bg-white text-sm">
            <p className="font-bold">Fix checklist:</p>
            <p className="mt-2 opacity-80">- Add CollectionPage + ItemList schema on all /collections/*</p>
            <p className="opacity-80">- Add Product schema with aggregateRating</p>
            <p className="opacity-80">- Add BreadcrumbList + FAQPage schema</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0A2A7A]">3. Speed - LCP Under 2.5s</h2>
          <p className="mt-3 opacity-80">In 2026, speed is LCP and INP on mobile. Remove 40% of apps. Each app = 50-150ms JS.</p>
          <ul className="mt-3 space-y-3 opacity-80 list-disc pl-5">
            <li><strong>App Bloat Audit:</strong> Most brands have 18 apps, need 9.</li>
            <li><strong>Image Strategy:</strong> WebP + fetchpriority=high on first product image.</li>
            <li><strong>Result:</strong> Our clients average LCP 1.9s vs industry 3.4s.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#0A2A7A]">4. Internal Linking - Free 20% Lift</h2>
          <p className="mt-3 opacity-80">Add 3 collection links inside every collection description, link blog to collections, and add footer sitemap with top collections.</p>
        </div>
      </div>

      <Link href="/#case-studies" className="mt-12 inline-block px-6 py-3 rounded-full text-sm font-bold text-white bg-[#0A2A7A]">Back to Case Studies</Link>
    </main>
  )
}
