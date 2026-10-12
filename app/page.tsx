"use client"
import Link from 'next/link'
import AuditForm from "./components/AuditForm"
import WhatsAppButton from "./components/WhatsAppButton"
export default function Home(){
return(
<main className="bg-white">
<header className="bg-[#0A2A7A] text-white sticky top-0 z-50"><div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center"><div><div className="font-bold text-lg">Novi LLC</div><div className="text-xs opacity-70">Shopify Agency | E-commerce Growth</div></div><a href="mailto:info@novi-llc.com" className="bg-white text-[#0A2A7A] px-5 py-2 rounded-lg text-sm font-bold">Book a Call</a></div></header>
<section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10"><div><div className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 border inline-block">Serving $5k+ to $100k+/mo - 3 spots left</div><h1 className="mt-4 text-5xl font-bold text-[#0A2A7A] leading-none">Shopify Stores Leak 23% Revenue. We Find It.</h1><p className="mt-4 opacity-70">Inbox Radar finds deliverability, Klaviyo, and SEO leaks in 24h. Fixed in 14 days.</p></div><div className="bg-slate-50 p-2 rounded-2xl border"><AuditForm /></div></section>
<section className="bg-slate-50 border-y py-16"><div className="max-w-7xl mx-auto px-6"><h2 className="text-3xl font-bold text-[#0A2A7A]">Insights — Real leaks we fix</h2><div className="mt-8 grid gap-5">
<Link href="/insights/how-i-fixed-23-percent-revenue-leak-shopify" className="block bg-white rounded-2xl border p-6 hover:shadow"><div className="text-xs font-bold text-[#0A2A7A]">INBOX RADAR - 01 • NEW</div><div className="mt-2 text-xl font-bold text-[#0A2A7A]">How I Fixed a 23% Revenue Leak for a Shopify Brand Doing $40k/mo →</div><div className="mt-2 text-sm opacity-60">SPF DKIM DMARC broken, $9,200 recovered in 14 days.</div></Link>
<Link href="/insights/from-spam-to-inbox-72h" className="block bg-white rounded-2xl border p-6 hover:shadow"><div className="text-xs font-bold text-[#8B5E00]">CASE STUDY - 02</div><div className="mt-2 text-xl font-bold text-[#0A2A7A]">From Spam to Inbox in 72h - Full in 14 Days →</div><div className="mt-2 text-sm opacity-60">Day 1-2: Fixed DNS + cleaned list. Day 3: 92% inbox. Day 4-14: Warm 100 to 5000.</div></Link>
<Link href="/insights/shopify-seo-2026" className="block bg-white rounded-2xl border p-6 hover:shadow"><div className="text-xs font-bold">STRATEGY - 03</div><div className="mt-2 text-xl font-bold text-[#0A2A7A]">Shopify SEO in 2026 →</div><div className="mt-2 text-sm opacity-60">EEAT + Core Web Vitals. Schema, speed, UGC reviews.</div></Link>
</div></div></section>
<footer className="bg-[#0A2A7A] text-white py-10"><div className="max-w-7xl mx-auto px-6"><div className="font-bold">Novi LLC</div><div className="text-xs opacity-60">Accra, Ghana - Remote Worldwide</div></div></footer>
<WhatsAppButton />
</main>
)}
