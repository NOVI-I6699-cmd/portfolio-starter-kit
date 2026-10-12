"use client"
import Link from 'next/link'
import AuditForm from "./components/AuditForm"
import WhatsAppButton from "./components/WhatsAppButton"

export default function Home(){
 return(
  <main className="bg-white">
   <header className="bg-[#0A2A7A] text-white sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
     <div className="leading-none">
      <div className="font-bold text-[16px]">Novi LLC</div>
      <div className="text-[10px] mt-1 opacity-70">Shopify Agency | E-commerce Growth and Brand Strategy</div>
      <div className="text-[10px] mt-1 opacity-50">Accra, Ghana - Remote Worldwide - EST Hours</div>
     </div>
     <a href="mailto:info@novi-llc.com" className="bg-white text-[#0A2A7A] px-4 py-2 rounded-lg text-sm font-bold">Book a Call</a>
    </div>
   </header>

   <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
    <div>
     <div className="inline-flex text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 border text-[#0A2A7A]">Serving $5k+ to $100k+/mo - 3 spots left</div>
     <h1 className="mt-4 text-5xl font-bold text-[#0A2A7A] leading-none">Shopify Stores Leak 23% Revenue. We Find It.</h1>
     <p className="mt-4 text-slate-600">Whether you do $5k per month or $100k per month - Inbox Radar finds deliverability, Klaviyo, and SEO leaks in 24h. Fixed in 14 days.</p>
     <div className="mt-6 text-xs text-slate-500">✓ Accra to US Brands • ✓ EST Hours • ✓ Inbox in 72h</div>
     <div className="mt-2 text-xs font-semibold text-[#0A2A7A]">✓ We accept US ACH Wire and Euro via Grey</div>
    </div>
    <div className="bg-slate-50 p-3 rounded-2xl border"><AuditForm /></div>
   </section>

   <section className="bg-slate-50 border-y py-14">
    <div className="max-w-7xl mx-auto px-6">
     <h2 className="text-2xl font-bold text-[#0A2A7A]">Insights — Real leaks we fix for all stores</h2>
     <div className="mt-6 grid gap-4">
      <Link href="/insights/how-i-fixed-23-percent-revenue-leak-shopify" className="block bg-white border rounded-2xl p-5 hover:shadow">
       <div className="text-[11px] font-bold text-[#0A2A7A]">INBOX RADAR - 01</div>
       <div className="font-bold text-[#0A2A7A] mt-1">How I Fixed a 23% Revenue Leak for a Shopify Brand Doing $40k/mo →</div>
      </Link>
      <Link href="/insights/from-spam-to-inbox-72h" className="block bg-white border rounded-2xl p-5 hover:shadow">
       <div className="text-[11px] font-bold text-amber-700">CASE STUDY - 02</div>
       <div className="font-bold text-[#0A2A7A] mt-1">From Spam to Inbox in 72h - Full in 14 Days →</div>
      </Link>
      <Link href="/insights/shopify-seo-2026" className="block bg-white border rounded-2xl p-5 hover:shadow">
       <div className="text-[11px] font-bold">STRATEGY - 03</div>
       <div className="font-bold text-[#0A2A7A] mt-1">Shopify SEO in 2026 →</div>
      </Link>
     </div>
    </div>
   </section>

   <footer className="bg-[#0A2A7A] text-white py-10">
    <div className="max-w-7xl mx-auto px-6 flex justify-between">
     <div>
      <div className="font-bold">Novi LLC</div>
      <div className="text-xs mt-1 opacity-60">Shopify Agency | E-commerce Growth and Brand Strategy</div>
      <div className="text-xs mt-2 opacity-50">Accra, Ghana - Remote Worldwide - EST Hours</div>
      <div className="text-xs mt-3"><a href="mailto:info@novi-llc.com" className="underline opacity-80">Contact Us: info@novi-llc.com</a></div>
     </div>
     <div className="text-xs opacity-60">Serving $5k+ to $100k+/mo stores</div>
    </div>
   </footer>
   <WhatsAppButton />
  </main>
 )
}
