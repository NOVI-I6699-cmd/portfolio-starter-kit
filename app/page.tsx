import AuditForm from '@/components/AuditForm'

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="bg-[#0A2A7A] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-[var(--font-playfair)] text-[22px] tracking-[-0.02em] font-medium">Novi LLC</span>
          <nav className="flex items-center gap-6 text-[14px] font-[var(--font-inter)]">
            <a href="#inbox-radar" className="hover:opacity-80">Inbox Radar</a>
            <a href="#blog" className="hover:opacity-80">Blog</a>
            <a href="https://www.linkedin.com/in/floran-novi-llc/" target="_blank" className="hover:opacity-80">LinkedIn</a>
            <a href="https://x.com/novi_llc" target="_blank" className="hover:opacity-80">X</a>
            <a href="mailto:hello@novi-llc.com" className="bg-white text-[#0A2A7A] px-5 py-2.5 font-medium hover:bg-[#f0f0f0] transition">Book a Call</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-[var(--font-playfair)] text-[56px] leading-[0.95] tracking-[-0.02em] text-[#0A2A7A]">
            We Turn Shopify Stores Into Growth Engines.
          </h1>
          <p className="mt-6 text-[18px] leading-7 text-[#0A2A7A]/80 font-[var(--font-inter)]">
            Shopify Agency focused on e-commerce growth & brand strategy. We audit, optimize, and scale your store.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="mailto:hello@novi-llc.com" className="bg-[#0A2A7A] text-white px-6 py-3 text-sm font-medium">hello@novi-llc.com</a>
            <a href="https://www.linkedin.com/in/floran-novi-llc/" target="_blank" className="border border-[#0A2A7A] text-[#0A2A7A] px-6 py-3 text-sm font-medium">LinkedIn</a>
          </div>
        </div>
        <AuditForm />
      </section>

      {/* INBOX RADAR */}
      <section id="inbox-radar" className="bg-[#0A2A7A] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[var(--font-playfair)] text-[40px] tracking-[-0.02em]">Inbox Radar</h2>
          <p className="mt-3 text-white/80 max-w-2xl font-[var(--font-inter)]">Our proprietary email deliverability & revenue recovery system for Shopify brands. See exactly where your Klaviyo money leaks.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-6 font-[var(--font-inter)]">
            <div className="border border-white/20 p-6"><h3 className="font-medium">Deliverability Audit</h3><p className="text-sm text-white/70 mt-2">Spam, bounces, suppression analysis.</p></div>
            <div className="border border-white/20 p-6"><h3 className="font-medium">Revenue Recovery</h3><p className="text-sm text-white/70 mt-2">Flows that actually convert.</p></div>
            <div className="border border-white/20 p-6"><h3 className="font-medium">Growth Roadmap</h3><p className="text-sm text-white/70 mt-2">90-day plan to scale.</p></div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end">
          <h2 className="font-[var(--font-playfair)] text-[36px] text-[#0A2A7A] tracking-[-0.02em]">Insights</h2>
          <a href="https://x.com/novi_llc" target="_blank" className="text-sm underline text-[#0A2A7A]">Follow on X →</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-8 font-[var(--font-inter)]">
          <article className="border border-[#0A2A7A]/10 p-6 hover:border-[#0A2A7A]/30 transition"><p className="text-xs uppercase tracking-widest opacity-60">Inbox Radar</p><h3 className="mt-2 font-[var(--font-playfair)] text-xl text-[#0A2A7A]">Why Your Klaviyo Flows Lose 23% Revenue</h3><p className="mt-2 text-sm opacity-70">The fix we use for 7-figure brands...</p></article>
          <article className="border border-[#0A2A7A]/10 p-6 hover:border-[#0A2A7A]/30 transition"><p className="text-xs uppercase tracking-widest opacity-60">Case Study</p><h3 className="mt-2 font-[var(--font-playfair)] text-xl text-[#0A2A7A]">How We Fixed Deliverability in 14 Days</h3><p className="text-sm opacity-70 mt-2">From 71% to 99% inbox.</p></article>
          <article className="border border-[#0A2A7A]/10 p-6 hover:border-[#0A2A7A]/30 transition"><p className="text-xs uppercase tracking-widest opacity-60">Strategy</p><h3 className="mt-2 font-[var(--font-playfair)] text-xl text-[#0A2A7A]">Shopify SEO in 2026</h3><p className="text-sm opacity-70 mt-2">What actually ranks now.</p></article>
        </div>
      </section>

      {/* FOOTER - Official */}
      <footer className="bg-[#0A2A7A] text-white py-12 font-[var(--font-inter)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-[var(--font-playfair)] text-xl">Novi LLC</p>
            <p className="mt-2 text-sm text-white/70">Shopify Agency • E-commerce Growth & Brand Strategy</p>
            <p className="mt-4 text-sm"><a href="mailto:hello@novi-llc.com" className="underline">hello@novi-llc.com</a></p>
          </div>
          <div className="flex gap-6 text-sm text-white/80">
            <a href="https://www.linkedin.com/in/floran-novi-llc/" target="_blank" className="hover:text-white underline">LinkedIn</a>
            <a href="https://x.com/novi_llc" target="_blank" className="hover:text-white underline">X / Twitter</a>
            <a href="mailto:hello@novi-llc.com" className="hover:text-white underline">Book a Call</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
