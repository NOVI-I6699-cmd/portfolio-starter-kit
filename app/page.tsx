import AuditForm from './components/AuditForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* HEADER - Rule: Novi Blue bg + White text inverted */}
      <header className="w-full bg-[#0A2A7A] text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="font-[var(--font-playfair)] text-2xl tracking-[-0.02em]">Novi LLC</div>
          <div className="hidden md:block font-[var(--font-inter)] text-xs tracking-widest opacity-80">Shopify Agency | E-commerce Growth & Brand Strategy</div>
          <nav className="flex gap-6 text-sm opacity-90">
            <a href="/" className="hover:opacity-60">home</a>
            <a href="/blog" className="hover:opacity-60">blog</a>
          </nav>
        </div>
      </header>

      {/* HERO - LinkedIn Banner style: White + Novi Blue text, centered at 55% */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-block border border-[#0A2A7A] text-[#0A2A7A] text-[11px] tracking-widest px-3 py-1.5 rounded-full mb-6 font-[var(--font-inter)]">
            EMAIL RETENTION FOR SHOPIFY • $10K/MO+ BRANDS
          </div>
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#0A2A7A]">
            I help US Shopify brands<br/>doing $10k/mo recover <span className="italic">30% revenue</span> with email.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[#0A2A7A]/80 max-w-2xl font-[var(--font-inter)]">
            I'm Novi — email retention specialist for Shopify. I audit Klaviyo / Omnisend and fix 3 leaks: no post-purchase flow, generic cart recovery, no VIP. <br/><br/>
            <span className="font-bold text-[#0A2A7A]">I work async from Ghana, so you get a 10-min Loom teardown in 24h while you sleep. No meetings needed.</span>
          </p>

          {/* Audit Form with Novi Brand */}
          <AuditForm />
        </div>
      </section>

      {/* TRUST BAR - Blue */}
      <section className="bg-[#0A2A7A] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-8 justify-between items-center font-[var(--font-inter)] text-sm">
          <div>✓ Klaviyo & Omnisend Certified</div>
          <div>✓ Async Loom Delivery • No Calls</div>
          <div>✓ Based in Ghana → Serving US Brands</div>
          <div>✓ novi-llc.com | @novi_llc</div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-xs text-[#0A2A7A]/50 flex justify-between">
        <span>© 2026 Novi LLC — All rights reserved</span>
        <span className="font-[var(--font-playfair)]">Novi LLC</span>
      </footer>
    </main>
  )
}
