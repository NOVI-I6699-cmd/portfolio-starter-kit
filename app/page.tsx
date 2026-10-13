"use client"
import Link from 'next/link'
import AuditForm from "./components/AuditForm"
import WhatsAppButton from "./components/WhatsAppButton"

export default function Home() {
  return (
    <div className="bg-white">
      <header className="text-white sticky top-0 z-50 shadow-sm bg-[#0A2A7A]" style={{backgroundColor: '#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex flex-col leading-none">
            <div className="font-bold text-lg tracking-tight">Novi LLC</div>
            <div className="text-xs mt-1 text-white/70 tracking-wide">Shopify Agency | E-commerce Growth and Brand Strategy</div>
            <div className="text-xs mt-0.5 text-white/50">Accra, Ghana - Remote Worldwide - EST Hours</div>
          </div>
          <a href="mailto:info@novi-llc.com" className="bg-white px-5 py-2.5 rounded-lg text-sm font-bold shadow text-[#0A2A7A]">Book a Call</a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 border text-[#0A2A7A]">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Serving Shopify stores from $5k+ to $100k+ per month - 3 spots left
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-tight text-[#0A2A7A]">Shopify Stores Leak 23% Revenue. We Find It.</h1>
          <div className="mt-4 text-base leading-7 opacity-70 max-w-xl text-[#0A2A7A]">Whether you do $5k per month or $100k per month - Inbox Radar finds deliverability, Klaviyo, and SEO leaks in 24h. Fixed in 14 days.</div>
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold text-[#0A2A7A]">$5k/mo</div><div className="text-xs opacity-60 mt-1">$1,150/mo lost</div></div>
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold text-[#0A2A7A]">$20k/mo</div><div className="text-xs opacity-60 mt-1">$4,600/mo lost</div></div>
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold text-[#0A2A7A]">$100k/mo</div><div className="text-xs opacity-60 mt-1">$23k/mo lost</div></div>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs opacity-60 text-[#0A2A7A]"><div>✓ Accra to US Brands</div><div>✓ EST Hours</div><div>✓ Inbox in 72h</div></div>
          <div className="mt-3 text-xs font-semibold text-[#0A2A7A]">✓ We accept US ACH Wire and Euro payments via Grey - easy payment for US and EU brands.</div>
        </div>
        <div className="bg-slate-50 p-2 rounded-2xl border shadow-sm"><AuditForm /></div>
      </section>

      {/* FOUNDER - LOCKED TO NOVI BLUE #0A2A7A - MATCHES HEADER */}
      <section className="bg-[#0A2A7A] py-20" style={{backgroundColor: '#0A2A7A'}}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[360px_1fr] gap-12 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-[300px] h-[300px] rounded-full border-[6px] border-white overflow-hidden bg-[#0E3A9A] shadow-2xl" style={{backgroundColor: '#0E3A9A'}}>
              <img src="/founder-floran-dieudonnie-novi-llc.jpg" alt="Floran Dieudonnie Founder NOVI LLC" className="w-full h-full object-cover" />
            </div>
            <p className="mt-5 text-[11px] tracking-[0.2em] text-white/60 uppercase">Founder • NOVI LLC</p>
            <p className="text-sm font-bold text-white">Floran Dieudonnie</p>
          </div>
          <div className="text-white">
            <div className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-3">Founder</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Built by an <span className="underline decoration-white/30">operator, not an agency.</span>
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-8 text-white/90">
              <p>I'm Floran Dieudonnie, Founder @ NOVI LLC. I didn't build this from a plush boardroom with seed funding. I built it here in Accra, Ghana — laptop, phone that never stops buzzing, and an obsession for finding hidden revenue Shopify owners leave on the table.</p>
              <p>I don't run a bloated agency with Account Executives and vanity metrics. I run a lean <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded">leak-detection lab</span> for Shopify brands doing <span className="font-bold text-white">$5k to $100k+/mo</span>.</p>
              <p>Our data is clear: the average store forfeits <span className="font-bold text-white text-xl">23%</span> to silent killers — emails trapped in spam, broken Klaviyo flows abandoning high-intent buyers, and SEO gaps handing traffic to competitors. We don't guess; we audit, isolate, and repair in 14 days. Accra — Remote Worldwide — EST Hours. US ACH Wire & Euro via Grey.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-y">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border shadow-sm">
          <div className="bg-slate-50 p-8 md:p-10">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#0A2A7A]/60 mb-3">Our Mission</div>
            <h3 className="text-2xl font-bold text-[#0A2A7A] leading-tight">We maximize retained revenue by eliminating invisible leaks.</h3>
            <p className="mt-4 text-sm leading-6 text-[#0A2A7A]/60">We audit deliverability, Klaviyo automation, and SEO structural gaps in 24h — repaired in 14 days.</p>
          </div>
          <div className="
