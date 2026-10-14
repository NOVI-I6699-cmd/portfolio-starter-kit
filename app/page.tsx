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

      <section id="case-studies" className="bg-slate-50 border-y py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold" style={{color: '#0A2A7A'}}>Insights - Real leaks we fix for all stores</h2>
          <div className="mt-8 grid gap-5">
            <Link href="/insights/how-i-fixed-23-percent-revenue-leak-shopify" className="block bg-white rounded-2xl border p-6 hover:shadow-md transition">
              <div className="text-xs uppercase tracking-widest font-semibold" style={{color: '#0A2A7A'}}>INBOX RADAR - 01 - CLICK TO READ</div>
              <div className="mt-2 text-xl font-bold" style={{color: '#0A2A7A'}}>Why Your Klaviyo Flows Lose 23 Percent</div>
            </Link>
            <Link href="/insights/from-spam-to-inbox-72h" className="block bg-white rounded-2xl border p-6 hover:shadow-md transition">
              <div className="text-xs uppercase tracking-widest font-semibold" style={{color: '#0A2A7A'}}>CASE STUDY - 02 - CLICK TO READ</div>
              <div className="mt-2 text-xl font-bold" style={{color: '#0A2A7A'}}>From Spam to Inbox in 72h - Full in 14 Days</div>
            </Link>
            <Link href="/insights/shopify-seo-2026" className="block bg-white rounded-2xl border p-6 hover:shadow-md transition">
              <div className="text-xs uppercase tracking-widest font-semibold" style={{color: '#0A2A7A'}}>STRATEGY - 03 - CLICK TO READ</div>
              <div className="mt-2 text-xl font-bold" style={{color: '#0A2A7A'}}>Shopify SEO in 2026</div>
            </Link>
            <Link href="/insights/case-study-04" className="block bg-white rounded-2xl border p-6 hover:shadow-md transition ring-1 ring-blue-100">
              <div className="text-xs uppercase tracking-widest font-semibold" style={{color: '#0A2A7A'}}>CRO / UX - 04 - NEW - CLICK TO READ</div>
              <div className="mt-2 text-xl font-bold" style={{color: '#0A2A7A'}}>The Back Button That Was Killing Warm Leads</div>
              <div className="mt-1 text-sm opacity-60">The $0 anchor fix that stops losing 60% of binge readers + video proof</div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative text-white py-16 overflow-hidden" style={{backgroundColor: '#0A2A7A'}}>
        <div className="absolute inset-0 z-0">
          <img src="/ghana-novi-footer-bg.jpg" alt="Ghana Accra Novi LLC Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0" style={{background: 'linear-gradient(to right, #0A2A7A 0%, #0A2A7A 45%, rgba(10,42,122,0.78) 70%, rgba(10,42,122,0.38) 100%)'}}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1.2fr_0.7fr_0.9fr] gap-10 items-start">
            <div>
              <div className="font-bold text-lg">Novi LLC</div>
              <div className="mt-1 text-sm" style={{color: 'rgba(255,255,255,0.8)'}}>Shopify Agency | E-commerce Growth and Brand Strategy</div>
            </div>
            <div>
              <div className="font-bold text-sm uppercase tracking-widest">Contact us</div>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a href="mailto:info@novi-llc.com" className="underline">info@novi-llc.com</a>
              </div>
            </div>
            <div className="relative min-h-[180px] flex flex-col items-end justify-end text-right">
              <div className="text-4xl font-black leading-none mt-1 tracking-tight">ACCRA GHANA</div>
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}
