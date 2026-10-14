"use client"
import Link from 'next/link'
import AuditForm from "./components/AuditForm"
import WhatsAppButton from "./components/WhatsAppButton"

export default function Home() {
  return (
    <div className="bg-white">
      <header className="text-white sticky top-0 z-50 shadow-sm" style={{backgroundColor: '#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex flex-col leading-none">
            <div className="font-bold text-lg tracking-tight">Novi LLC</div>
            <div className="text-xs mt-1 tracking-wide" style={{color: 'rgba(255,255,255,0.7)'}}>Shopify Agency | E-commerce Growth and Brand Strategy</div>
            <div className="text-xs mt-0.5" style={{color: 'rgba(255,255,255,0.5)'}}>Accra, Ghana - Remote Worldwide - EST Hours</div>
          </div>
          <a href="mailto:info@novi-llc.com" className="bg-white px-5 py-2.5 rounded-lg text-sm font-bold shadow" style={{color: '#0A2A7A'}}>Book a Call</a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 border" style={{color: '#0A2A7A'}}>
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Serving Shopify stores from $5k+ to $100k+ per month - 3 spots left
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-tight" style={{color: '#0A2A7A'}}>Shopify Stores Leak 23% Revenue. We Find It.</h1>
          <div className="mt-4 text-base leading-7 opacity-70 max-w-xl" style={{color: '#0A2A7A'}}>Whether you do $5k per month or $100k per month - Inbox Radar finds deliverability, Klaviyo, and SEO leaks in 24h. Fixed in 14 days.</div>
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold" style={{color: '#0A2A7A'}}>$5k/mo</div><div className="text-xs opacity-60 mt-1">$1,150/mo lost</div></div>
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold" style={{color: '#0A2A7A'}}>$20k/mo</div><div className="text-xs opacity-60 mt-1">$4,600/mo lost</div></div>
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold" style={{color: '#0A2A7A'}}>$100k/mo</div><div className="text-xs opacity-60 mt-1">$23k/mo lost</div></div>
          </div>
        </div>
        <div className="bg-slate-50 p-2 rounded-2xl border shadow-sm"><AuditForm /></div>
      </section>

      <section className="py-20" style={{backgroundColor: '#0A2A7A'}}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[360px_minmax(0,1fr)] gap-12 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-[300px] h-[300px] rounded-full border-[6px] border-white overflow-hidden shadow-2xl" style={{backgroundColor: '#123A9A'}}>
              <img src="/founder-floran-dieudonnie-novi-llc.jpg" alt="Floran Dieudonnie Founder NOVI LLC" className="w-full h-full object-cover" />
            </div>
            <p className="mt-5 text-[11px] tracking-[0.2em] uppercase" style={{color: 'rgba(255,255,255,0.6)'}}>Founder - NOVI LLC</p>
            <p className="text-sm font-bold text-white">Floran Dieudonnie</p>
          </div>
          <div className="text-white min-w-0">
            <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{color: 'rgba(255,255,255,0.5)'}}>Founder</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Built by an operator, not an agency.</h2>
            <div className="mt-6 space-y-4 text-[16px] leading-8" style={{color: '#FFFFFF'}}>
              <p>I am Floran Dieudonnie, Founder at NOVI LLC. I built it here in Accra, Ghana - laptop, phone that never stops buzzing, and an obsession for finding hidden revenue Shopify owners leave on the table.</p>
              <p>Our data is clear: the average store forfeits 23 percent to silent killers - emails trapped in spam, broken Klaviyo flows, and SEO gaps handing traffic to competitors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-y">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border shadow-sm">
          <div className="bg-slate-50 p-8 md:p-10">
            <div className="text-xs uppercase tracking-widest font-semibold opacity-60 mb-3" style={{color: '#0A2A7A'}}>Our Mission</div>
            <h3 className="text-2xl font-bold leading-tight" style={{color: '#0A2A7A'}}>We maximize retained revenue by eliminating invisible leaks.</h3>
          </div>
          <div className="p-8 md:p-10 text-white" style={{backgroundColor: '#0A2A7A'}}>
            <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{color: 'rgba(255,255,255,0.5)'}}>Our Goal / Vision</div>
            <h3 className="text-2xl font-bold leading-tight">To become the leading leak-detection partner for $5k plus per month stores.</h3>
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-slate-50 border-y py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold" style={{color: '#0A2A7A'}}>Insights - Real leaks we fix</h2>
          <div className="mt-8 grid gap-5">
            <Link href="/insights/how-i-fixed-23-percent-revenue-leak-shopify" className="block bg-white rounded-2xl border p-6">INBOX RADAR - 01 - Why Your Klaviyo Flows Lose 23 Percent</Link>
            <Link href="/insights/from-spam-to-inbox-72h" className="block bg-white rounded-2xl border p-6">CASE STUDY - 02 - From Spam to Inbox in 72h</Link>
            <Link href="/insights/shopify-seo-2026" className="block bg-white rounded-2xl border p-6">STRATEGY - 03 - Shopify SEO in 2026</Link>
            <Link href="/insights/case-study-04" className="block bg-white rounded-2xl border p-6 ring-1 ring-blue-100">CRO / UX - 04 - NEW - The Back Button That Was Killing Warm Leads</Link>
          </div>
        </div>
      </section>

      <footer className="relative text-white py-16 overflow-hidden" style={{backgroundColor: '#0A2A7A'}}>
        <div className="absolute inset-0 z-0">
          <img src="/ghana-novi-footer-bg.jpg" alt="Ghana Accra" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, #0A2A7A 0%, #0A2A7A 45%, rgba(10,42,122,0.78) 70%, rgba(10,42,122,0.38) 100%)'}}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div>Copyrights 2026 | Novi LLC - Accra, Ghana</div>
          <div className="mt-4 flex gap-4 text-sm">
            <a href="mailto:info@novi-llc.com" className="underline">info@novi-llc.com</a>
            <a href="https://www.linkedin.com/in/floran-novi-llc/" className="underline">LinkedIn</a>
            <a href="https://x.com/novi_llc" className="underline">X</a>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}
