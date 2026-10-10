"use client"
import AuditForm from './components/AuditForm'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <header className="text-white sticky top-0 z-50" style={{backgroundColor:'#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center">
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-bold tracking-tight">Novi LLC</span>
            <span className="text-xs text-white/80 mt-1">Shopify Agency | E-commerce Growth and Brand Strategy</span>
          </div>
          <a href="mailto:hello@novi-llc.com" className="bg-white px-5 py-2.5 font-semibold rounded-lg text-sm" style={{color:'#0A2A7A'}}>Book a Call</a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-none tracking-tight" style={{color:'#0A2A7A'}}>We Turn Shopify Stores Into Growth Engines.</h1>
          <p className="mt-4 text-base md:text-lg leading-7 opacity-80" style={{color:'#0A2A7A'}}>Shopify Agency focused on e-commerce growth and brand strategy. Based in Accra, Ghana - serving US brands.</p>
        </div>
        <div className="w-full"><AuditForm /></div>
      </section>

      <section id="inbox-radar" className="text-white py-12" style={{backgroundColor:'#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Inbox Radar</h2>
          <p className="mt-3 text-white/80">Our proprietary email deliverability and revenue recovery system.</p>
        </div>
      </section>

      <section id="insights" className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex justify-between items-end">
          <h2 className="text-3xl font-bold" style={{color:'#0A2A7A'}}>Insights</h2>
          <a href="https://x.com/novi_llc" target="_blank" className="text-sm underline" style={{color:'#0A2A7A'}}>Follow on X</a>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#klaviyo-23" className="border border-slate-200 p-5 rounded-lg hover:shadow-md hover:border-blue-900 transition block">
            <p className="text-xs uppercase opacity-60">INBOX RADAR</p>
            <h3 className="mt-2 text-lg font-bold" style={{color:'#0A2A7A'}}>Why Your Klaviyo Flows Lose 23 Percent Revenue</h3>
            <p className="mt-3 text-sm underline opacity-70">Click to read breakdown</p>
          </a>
          <a href="#deliverability-72h" className="border border-slate-200 p-5 rounded-lg hover:shadow-md hover:border-blue-900 transition block">
            <p className="text-xs uppercase opacity-60">CASE STUDY</p>
            <h3 className="mt-2 text-lg font-bold" style={{color:'#0A2A7A'}}>From Spam to Inbox in 72h - Full Recovery in 14 Days</h3>
            <p className="mt-3 text-sm underline opacity-70">Click to see how we fixed it</p>
          </a>
          <a href="#shopify-seo" className="border border-slate-200 p-5 rounded-lg hover:shadow-md hover:border-blue-900 transition block">
            <p className="text-xs uppercase opacity-60">STRATEGY</p>
            <h3 className="mt-2 text-lg font-bold" style={{color:'#0A2A7A'}}>Shopify SEO in 2026</h3>
            <p className="mt-3 text-sm underline opacity-70">Click to read strategy</p>
          </a>
        </div>

        <div className="mt-20 space-y-10">
          <div id="klaviyo-23" className="bg-slate-50 p-6 md:p-8 rounded-xl border scroll-mt-28">
            <p className="text-xs uppercase tracking-widest opacity-60">INBOX RADAR</p>
            <h3 className="mt-2 text-2xl font-bold" style={{color:'#0A2A7A'}}>Why Klaviyo Loses 23 Percent Revenue</h3>
            <div className="mt-4 space-y-3 text-sm leading-7 opacity-80" style={{color:'#0A2A7A'}}>
              <p><strong>1. 1-hour trigger delay</strong> - We cut to 5 mins = +11 percent recovery.</p>
              <p><strong>2. No SMS fallback</strong> - If email is in spam, we fire SMS after 30 mins.</p>
              <p><strong>3. Wrong exclusion filter</strong> - Most brands block engaged users by mistake.</p>
              <a href="mailto:hello@novi-llc.com?subject=Audit%20my%20Klaviyo" className="inline-block mt-4 font-bold underline">Get your audit - Email us</a>
            </div>
          </div>

          <div id="deliverability-72h" className="bg-slate-50 p-6 md:p-8 rounded-xl border scroll-mt-28">
            <p className="text-xs uppercase tracking-widest opacity-60">CASE STUDY</p>
            <h3 className="mt-2 text-2xl font-bold" style={{color:'#0A2A7A'}}>How We Fixed Deliverability: Inbox in 72h, Full Revenue in 14 Days</h3>
            <div className="mt-4 space-y-3 text-sm leading-7 opacity-80" style={{color:'#0A2A7A'}}>
              <p><strong>Day 1-2:</strong> SPF DKIM DMARC broken + 38 percent dead list. Cleaned list, fixed DNS.</p>
              <p><strong>Day 3:</strong> Inbox hit 92 percent - first sales from
