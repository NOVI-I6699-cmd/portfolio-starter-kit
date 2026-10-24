import Link from 'next/link'
export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/#case-studies" className="text-sm text-[#0A2A7A]/60 hover:text-[#0A2A7A]">← Back to Case Studies</Link>
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#0A2A7A]/60">STRATEGY - 03 — Shopify Leak-Detection System: Inbox Radar + Klaviyo + AI Agents</p>

      {/* FINAL UNIFIED - matches Case 01 $40k/mo fix */}
      <h1 className="font-serif mt-3 text-[26px] leading-[1.15] tracking-[-0.02em] md:text-[36px] md:leading-[1.1] font-bold [text-wrap:balance] max-w-[20ch] md:max-w-[28ch] text-[#0A2A7A]">Shopify Leak-Detection in 2026 - Inbox Radar, Klaviyo, and Retention</h1>

      <p className="mt-4 text-sm font-bold text-[#0A2A7A]">By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs text-[#0A2A7A]/60">Shopify Leak-Detection System: Inbox Radar + Klaviyo + AI Agents - 9 min read</p>
      <p className="mt-6 text-lg leading-relaxed text-[#0A2A7A]/70">Inbox placement is everything in 2026. Shopify brands that win are not doing more flows. They are fixing inbox leaks and retaining more revenue. Here is the full playbook we use for 7-figure Shopify brands inside our Leak-Detection System.</p>

      <div className="mt-10 space-y-10 text-[15.5px] leading-7 text-[#0A2A7A]/90">
        <div className="border border-[#0A2A7A]/10 rounded-2xl p-6 bg-[#0A2A7A]/5">
          <p className="text-sm font-bold text-[#0A2A7A]">2026 Shopify Leak-Detection Stack - TLDR — Part of Leak-Detection</p>
          <div className="mt-3 space-y-1 text-sm opacity-80">
            <p>Inbox placement audit on every money flow</p>
            <p>Klaviyo Primary Tab recovery system</p>
            <p>LCP under 2.5s on checkout for retention</p>
            <p>Internal linking for collection revenue</p>
            <p>Inbox Radar + Klaviyo + AI Agents to retain revenue</p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-[#0A2A7A]">1. Inbox Placement - The #1 Revenue Factor</h2>
          <p className="mt-3 opacity-80">Gmail/Yahoo compliance updates now hit Shopify hard. If you run automated flows, you need real inbox placement.</p>
          <ul className="mt-3 space-y-3 opacity-80 list-disc pl-5">
            <li><strong>Inbox Audit:</strong> Every flow needs domain placement check. Not just open rate. Real Primary vs Promo vs Spam.</li>
            <li><strong>Domain Story:</strong> /pages/about-us with real address, real contact, not generic. Builds sender trust.</li>
            <li><strong>Proof Layer:</strong> Add real review signals + customer photos on flows to lift inbox trust.</li>
            <li><strong>Contact + Policy:</strong> Real phone, real email in footer, shipping/return with dates updated 2026.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-[#0A2A7A]">2. Collection Flows - Where Most Brands Lose</h2>
          <p className="mt-3 opacity-80">Shopify auto-adds flows, but 90% of stores have broken placement on collection and checkout sequences.</p>
          <div className="mt-3 rounded-xl border border-[#0A2A7A]/10 p-4 bg-white text-sm">
            <p className="font-bold">Fix checklist:</p>
            <p className="mt-2 opacity-80">- Audit Primary Tab placement on all /collections/* flows</p>
            <p className="opacity-80">- Add Klaviyo deliverability layer with aggregate sender score</p>
            <p className="opacity-80">- Add Breadcrumb + retention flow for abandoned checkout</p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-[#0A2A7A]">3. Speed - LCP Under 2.5s For Retention</h2>
          <p className="mt-3 opacity-80">In 2026, retention is LCP and INP on mobile checkout. Remove flow friction. Each delay = 7% drop in retention.</p>
          <ul className="mt-3 space-y-3 opacity-80 list-disc pl-5">
            <li><strong>Flow Audit:</strong> Most brands have 18 flows, need 9 high-converting ones.</li>
            <li><strong>Image Strategy:</strong> WebP + fetchpriority=high on first checkout asset for faster load.</li>
            <li><strong>Result:</strong> Our clients average retention lift 23% vs industry leaking to Promo.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-[#0A2A7A]">4. Internal Linking - Free 20% Lift + AI Agent Retention</h2>
          <p className="mt-3 opacity-80">Add 3 collection links inside every collection description, link flows to collections, and add retention sitemap with top collections. Then retain that traffic with Klaviyo flows + AI Agents for WhatsApp — don't let traffic leak after you paid to get it.</p>
        </div>
      </div>

      <Link href="/#case-studies" className="mt-12 inline-flex border px-6 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition" style={{borderColor: '#0A2A7A', color: '#0A2A7A'}}>
        ← Back to Case Studies Heading
      </Link>
    </main>
  )
}
