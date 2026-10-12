"use client"
import Link from 'next/link'
import AuditForm from "./components/AuditForm"
import WhatsAppButton from "./components/WhatsAppButton"

export default function Home(){
return(
<main className="bg-white">
<header className="text-white sticky top-0 z-50 shadow-sm bg-[#0A2A7A]"><div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center"><div className="flex flex-col leading-none"><div className="font-bold text-lg tracking-tight">Novi LLC</div><div className="text-xs mt-1 text-white/70 tracking-wide">Shopify Agency | E-commerce Growth and Brand Strategy</div><div className="text-xs mt-0.5 text-white/50">Accra, Ghana - Remote Worldwide - EST Hours</div></div><a href="mailto:info@novi-llc.com" className="bg-white px-5 py-2.5 rounded-lg text-sm font-bold shadow text-[#0A2A7A]">Book a Call</a></div></header>
<section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-start"><div><div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 border text-[#0A2A7A]"><span className="h-2 w-2 rounded-full bg-green-500"></span>Serving Shopify stores from $5k+ to $100k+ per month - 3 spots left</div><h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-tight text-[#0A2A7A]">Shopify Stores Leak 23% Revenue. We Find It.</h1><div className="mt-4 text-base leading-7 opacity-70 max-w-xl text-[#0A2A7A]">Whether you do $5k per month or $100k per month - Inbox Radar finds deliverability, Klaviyo, and SEO leaks in 24h. Fixed in 14 days.</div></div><div className="bg-slate-50 p-2 rounded-2xl border shadow-sm"><AuditForm /></div></section>
<section id="insights" className="bg-slate-50 border-y py-16"><div className="max-w-7xl mx-auto px-6"><h2 className="text-3xl font-bold text-[#0A2A7A]">Insights — Real leaks we fix for all stores</h2><div className="mt-8 grid gap-5">
<Link href="/insights/how-i-fixed-23-percent-revenue-leak-shopify" className="block bg-white rounded-2xl border p-6 hover:shadow-md transition"><div className="text-xs uppercase tracking-widest font-semibold text-[#0A2A7A]">INBOX RADAR - 01</div><div className="mt-2 text-xl font-bold text-[#0A2A7A]">How I Fixed a 23% Revenue Leak for a Shopify Brand Doing $40k/mo →</div></Link>
<Link href="/insights/from-spam-to-inbox-72h" className="block bg-white rounded-2xl border p-6 hover:shadow-md transition"><div className="text-xs uppercase tracking-widest font-semibold text-[#8B5E00]">CASE STUDY - 02</div><div className="mt-2 text-xl font-bold text-[#0A2A7A]">From Spam to Inbox in 72h - Full in 14 Days →</div></Link>
<Link href="/insights/shopify-seo-2026" className="block bg-white rounded-2xl border p-6 hover:shadow-md transition"><div className="text-xs uppercase tracking-widest font-semibold">STRATEGY - 03</div><div className="mt-2 text-xl font-bold text-[#0A2A7A]">Shopify SEO in 2026 →</div></Link>
</div></div></section>
<footer className="text-white py-10 bg-[#0A2A7A]"><div className="max-w-7xl mx-auto px-6 flex justify-between"><div><div className="font-bold">Novi LLC</div><div className="mt-1 text-xs text-white/70">Shopify Agency</div></div></div></footer>
<WhatsAppButton />
</main>
)}
