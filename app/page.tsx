"use client"
import Link from 'next/link'
import AuditForm from "./components/AuditForm"
import WhatsAppButton from "./components/WhatsAppButton"

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://novi-llc.com/#organization",
  "name": "Novi LLC",
  "alternateName": "NOVI - Shopify Growth Agency",
  "url": "https://novi-llc.com",
  "logo": "https://novi-llc.com/logo.png",
  "description": "Shopify Agency | E-commerce Growth and Brand Strategy. Serving Shopify stores from $5k+ to $100k+ per month. Accra, Ghana - Remote Worldwide - EST Hours.",
  "founder": {
    "@type": "Person",
    "name": "Floran Dieudonnie",
    "sameAs": "https://www.linkedin.com/in/floran-novi-llc/"
  },
  "telephone": "+233243876362",
  "email": "info@novi-llc.com",
  "sameAs": [
    "https://www.linkedin.com/in/floran-novi-llc/",
    "https://x.com/novi_llc"
  ],
  "knowsAbout": ["Shopify", "E-commerce Growth", "Shopify CRO"],
  "disambiguatingDescription": "Not affiliated with NOVI Space Inc aerospace company. Novi LLC is a Shopify agency based in Accra Ghana."
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
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

      <section id="case-studies" className="bg-slate-50 border-y py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold" style={{color: '#0A2A7A'}}>Insights - Real leaks we fix for all stores</h2>
          <div className="mt-8 grid gap-5">
            <Link href="/insights/how-i-fixed-23-percent-revenue-leak-shopify" className="block bg-white rounded-2xl border p-6 hover:shadow-md transition">
              <div className="text-xs uppercase tracking-widest font-semibold" style={{color: '#0A2A7A'}}>INBOX RADAR - 01</div>
              <div className="mt-2 text-xl font-bold" style={{color: '#0A2
