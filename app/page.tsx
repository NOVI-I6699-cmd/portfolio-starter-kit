"use client"
import Link from 'next/link'
import AuditForm from "./components/AuditForm"
import WhatsAppButton from "./components/WhatsAppButton"

export default function Home() {
  return (
    <main className="bg-white">
      <header className="text-white sticky top-0 z-50 shadow-sm bg-[#0A2A7A]">
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

      <section id="insights" className="bg-slate-50 border-y py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A2A7A]">Insights — Real leaks we fix for all stores</h2>
          <p className="mt-2 text-sm opacity-60">All case studies now with proof images — click to read</p>
          <div className="mt-8 grid gap-5">
            <Link href="/insights/how-i-fixed-23-percent-revenue-leak-shopify" className="block bg-white rounded-2xl border p-6 hover:shadow-md hover:border-[#0A2A7A]/20 transition">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#0A2A7A]">INBOX RADAR - 01 • CLICK TO READ →</div>
              <div className="mt-2 text-xl font-bold text-[#0A2A7A]">Why Your Klaviyo Flows Lose 23 Percent →</div>
              <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
                <div className="bg-slate-50 border rounded-xl p-3"><div className="font-bold">Trigger Delay</div><div className="mt-1 opacity-70 text-xs">1h to 5 mins = +11% recovery</div></div>
                <div className="bg-slate-50 border rounded-xl p-3"><div className="font-bold">No SMS Fallback</div><div className="mt-1 opacity-70 text-xs">Fire SMS after 30 mins if spam</div></div>
                <div className="bg-slate-50 border rounded-xl p-3"><div className="font-bold">Bad Exclusion</div><div className="mt-1 opacity-70 text-xs">You block engaged users by mistake</div></div>
              </div>
            </Link>

            <Link href="/insights/from-spam-to-inbox-72h" className="block bg-white rounded-2xl border-2 border-[#0A2A7A]/20 p-6 hover:shadow-lg hover:border-[#0A2A7A]/40 transition bg-gradient-to-br from-white to-blue-50/30">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#0A2A7A]">CASE STUDY - 02 • POPULAR • 3 PROOF IMAGES ✅ • CLICK TO READ →</div>
              <div className="mt-2 text-xl font-bold text-[#0A2A7A]">From Spam to Inbox in 72h - Full in 14 Days →</div>
              <div className="mt-3 text-sm leading-7 opacity-70 text-[#0A2A7A]">
                <div>Day 1-2: SPF DKIM DMARC broken + 38% dead list. Fixed DNS, cleaned list.</div>
                <div>Day 3: 92% inbox - first sales from spam folder. Proof: Inbox Radar + Gmail Primary + Cart Email (Info@novi-llc.com • 1234, Accra, Ghana)</div>
                <div>Day 4-14: Warm 100 to 5000 per day. 23% revenue recovered.</div>
              </div>
            </Link>

            <Link href="/insights/shopify-seo-2026" className="block bg-white rounded-2xl border p-6 hover:shadow-md hover:border-[#0A2A7A]/20 transition">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#0A2A7A]">STRATEGY - 03 • CLICK TO READ →</div>
              <div className="mt-2 text-xl font-bold text-[#0A2A7A]">Shopify SEO in 2026 →</div>
              <div className="mt-3 text-sm opacity-70 text-[#0A2A7A]">EEAT + Core Web Vitals. We fix collection schema, speed, UGC reviews. Works for $5k to $100k stores.</div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="text-white py-10 bg-[#0A2A7A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-bold">Novi LLC • 1234, Accra, Ghana</div>
            <div className="mt-1 text-xs text-white/70">Shopify Agency | E-commerce Growth and Brand Strategy</div>
            <div className="mt-2 text-xs text-white/60">Accra, Ghana - Remote Worldwide - EST Hours</div>
            <div className="mt-2 text-xs text-white/70">We accept US ACH Wire and Euro payments via Grey - easy payment for US and EU brands.</div>
            <div className="mt-3 text-sm"><a href="mailto:info@novi-llc.com" className="underline text-white/80">info@novi-llc.com</a> • Contact: Info@novi-llc.com</div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/80">
            <a href="mailto:info@novi-llc.com" className="underline font-semibold">Contact us</a>
            <a href="https://www.linkedin.com/in/floran-novi-llc/" target="_blank" className="underline">LinkedIn</a>
            <a href="https://x.com/novi_llc" target="_blank" className="underline">X</a>
            <a href="https://wa.me/233243876362" target="_blank" className="underline">WhatsApp</a>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </main>
  )
}
