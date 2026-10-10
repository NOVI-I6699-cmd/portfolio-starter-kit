import AuditForm from './components/AuditForm'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <header className="bg-[#0A2A7A] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
          <div className="flex flex-col leading-none">
            <span className="font-[var(--font-playfair)] text-[22px] md:text-[28px] font-bold tracking-tight">Novi LLC</span>
            <span className="font-[var(--font-inter)] text-[10px] md:text-[12px] text-white/80 mt-1">Shopify Agency | E-commerce Growth & Brand Strategy</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[14px]">
            <a href="#inbox-radar" className="hover:opacity-80">Inbox Radar</a>
            <a href="#insights" className="hover:opacity-80">Blog</a>
            <a href="https://www.linkedin.com/in/floran-novi-llc/" target="_blank">LinkedIn</a>
            <a href="https://x.com/novi_llc" target="_blank">X</a>
            <a href="mailto:hello@novi-llc.com" className="bg-white text-[#0A2A7A] px-5 py-2.5 font-semibold rounded-[8px]">Book a Call</a>
          </nav>
          <a href="mailto:hello@novi-llc.com" className="md:hidden bg-white text-[#0A2A7A] px-4 py-2 text-[13px] font-semibold rounded-[8px]">Book a Call</a>
        </div>
        <div className="md:hidden border-t border-white/10 px-4 py-2.5 flex gap-4 text-[12px] text-white/80 overflow-x-auto">
          <a href="#inbox-radar" className="whitespace-nowrap">Inbox Radar</a>
          <a href="#insights" className="whitespace-nowrap">Blog</a>
          <a href="https://www.linkedin.com/in/floran-novi-llc/" target="_blank" className="whitespace-nowrap">LinkedIn</a>
          <a href="https://x.com/novi_llc" target="_blank" className="whitespace-nowrap">X</a>
          <a href="https://wa.me/233243876362" target="_blank" className="whitespace-nowrap">WhatsApp</a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <h1 className="font-[var(--font-playfair)] text-[34px] leading-[0.95] md:text-[56px] tracking-[-0.02em] text-[#0A2A7A]">We Turn Shopify Stores Into Growth Engines.</h1>
          <p className="mt-4 md:mt-6 text-[16px] md:text-[18px] leading-7 text-[#0A2A7A]/80">Shopify Agency focused on e-commerce growth & brand strategy. Based in Accra, Ghana — serving US brands.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="mailto:hello@novi-llc.com" className="bg-[#0A2A7A] text-white px-6 py-3.5 text-sm font-medium text-center rounded-[8px]">hello@novi-llc.com</a>
            <a href="https://www.linkedin.com/in/floran-novi-llc/" target="_blank" className="border border-[#0A2A7A] text-[#0A2A7A] px-6 py-3.5 text-sm font-medium text-center rounded-[8px]">LinkedIn</a>
          </div>
          <p className="mt-4 text-[12px] text-[#0A2A7A]/60">📍 Accra, Ghana • Remote Worldwide • EST Hours</p>
        </div>
        <div className="w-full"><AuditForm /></div>
      </section>

      <section id="inbox-radar" className="bg-[#0A2A7A] text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-[var(--font-playfair)] text-[30px] md:text-[40px]">Inbox Radar</h2>
          <p className="mt-3 text-[15px] text-white/80 max-w-2xl">Our proprietary email deliverability & revenue recovery system for Shopify brands.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="border border-white/20 p-5 rounded-[8px]"><h3 className="font-medium">Deliverability Audit</h3><p className="text-sm text-white/70 mt-2">Fix spam, bounces, blocks.</p></div>
            <div className="border border-white/20 p-5 rounded-[8px]"><h3 className="font-medium">Revenue Recovery</h3><p className="text-sm text-white/70 mt-2">Klaviyo flows that convert.</p></div>
            <div className="border border-white/20 p-5 rounded-[8px]"><h3 className="font-medium">Growth Roadmap</h3><p className="text-sm text-white/70 mt-2">90-day plan to scale.</p></div>
          </div>
        </div>
      </section>

      {/* INSIGHTS - NOW CLICKABLE */}
      <section id="insights" className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex justify-between items-end">
          <h2 className="font-[var(--font-playfair)] text-[28px] md:text-[36px] text-[#0A2A7A]">Insights</h2>
          <a href="https://x.com/novi_llc" target="_blank" className="text-sm underline text-[#0A2A7A]">Follow on X →</a>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#klaviyo-23" className="border border-[#0A2A7A]/10 p-5 rounded-[8px] hover:border-[#0A2A7A]/30 hover:shadow-md transition block">
            <p className="text-[11px] uppercase opacity-60">INBOX RADAR</p>
            <h3 className="mt-2 font-[var(--font-playfair)] text-[18px] text-[#0A2A7A]">Why Your Klaviyo Flows Lose 23% Revenue</h3>
            <p className="mt-3 text-[13px] text-[#0A2A7A]/60">Read breakdown →</p>
          </a>
          <a href="#deliverability-72h" className="border border-[#0A2A7A]/10 p-5 rounded-[8px] hover:border-[#0A2A7A]/30 hover:shadow-md transition block">
            <p className="text-[11px] uppercase opacity-60">CASE STUDY</p>
            <h3 className="mt-2 font-[var(--font-playfair)] text-[18px] text-[#0A2A7A]">From Spam to Inbox in 72h (Full Recovery in 14 Days)</h3>
            <p className="mt-3 text-[13px] text-[#0A2A7A]/60">How we fixed it →</p>
          </a>
          <a href="#shopify-seo" className="border border-[#0A2A7A]/10 p-5 rounded-[8px] hover:border-[#0A2A7A]/30 hover:shadow-md transition block">
            <p className="text-[11px] uppercase opacity-60">STRATEGY</p>
            <h3 className="mt-2 font-[var(--font-playfair)] text-[18px] text-[#0A2A7A]">Shopify SEO in 2026</h3>
            <p className="mt-3 text-[13px] text-[#0A2A7A]/60">Read strategy →</p>
          </a>
        </div>

        {/* DETAILED EXPLANATIONS - SHOW WHEN CLICKED */}
        <div className="mt-16 space-y-12">
          <div id="klaviyo-23" className="bg-[#F7F8FA] p-6 md:p-8 rounded-[12px] border border-[#0A2A7A]/10 scroll-mt-24">
            <p className="text-[11px] uppercase tracking-widest text-[#0A2A7A]/60">INBOX RADAR</p>
            <h3 className="mt-2 font-[var(--font-playfair)] text-[24px] text-[#0A2A7A]">Why Your Klaviyo Flows Lose 23% Revenue</h3>
            <div className="mt-4 text-[15px] leading-7 text-[#0A2A7A]/80 space-y-3">
              <p><strong>1. Trigger Delay:</strong> Default 1-hour delay → we cut to 5 mins = +11% recovery.</p>
              <p><strong>2. No SMS fallback:</strong> Email in spam? We fire SMS after 30 mins.</p>
              <p><strong>3. Wrong filter:</strong> Most brands exclude engaged users by mistake. We fix it.</p>
              <p className="pt
