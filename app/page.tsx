"use client"
import AuditForm from './components/AuditForm'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <main className="bg-white">
      <header className="text-white sticky top-0 z-50 shadow-sm" style={{backgroundColor:'#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex flex-col leading-none">
            <div className="font-bold text-lg tracking-tight">Novi LLC</div>
            <div className="text-xs mt-1 text-white/70 tracking-wide">Shopify Agency | E-commerce Growth and Brand Strategy</div>
            <div className="text-xs mt-0.5 text-white/50">Accra, Ghana - Remote Worldwide - EST Hours</div>
          </div>
          <a href="mailto:hello@novi-llc.com" className="bg-white px-5 py-2.5 rounded-lg text-sm font-bold shadow" style={{color:'#0A2A7A'}}>Book a Call</a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 border" style={{color:'#0A2A7A'}}>
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Serving Shopify stores from $1k+ to $100k+ per month - 3 spots left
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-none tracking-tight" style={{color:'#0A2A7A'}}>
            Shopify Stores Leak 23% Revenue. We Find It.
          </h1>
          <div className="mt-4 text-base leading-7 opacity-70 max-w-xl" style={{color:'#0A2A7A'}}>
            Whether you do $1k per month or $50k per month - Inbox Radar finds deliverability, Klaviyo, and SEO leaks in 24h. Fixed in 14 days.
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold" style={{color:'#0A2A7A'}}>$1k/mo</div><div className="text-xs opacity-60 mt-1">$230/mo lost</div></div>
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold" style={{color:'#0A2A7A'}}>$5k/mo</div><div className="text-xs opacity-60 mt-1">$1,150/mo lost</div></div>
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold" style={{color:'#0A2A7A'}}>$20k/mo</div><div className="text-xs opacity-60 mt-1">$4,600/mo lost</div></div>
          </div>

          <div className="mt-6 flex items-center gap-4 text-xs opacity-60" style={{color:'#0A2A7A'}}>
            <div>✓ Accra to US Brands</div>
            <div>✓ EST Hours</div>
            <div>✓ Inbox in 72h</div>
          </div>

          <div className="mt-3 text-xs font-semibold" style={{color:'#0A2A7A'}}>
            ✓ We accept US ACH Wire and Euro payments via Grey - easy payment for US and EU brands.
          </div>
        </div>

        <div className="bg-slate-50 p-2 rounded-2xl border shadow-sm"><AuditForm /></div>
      </section>

      <footer className="text-white py-10" style={{backgroundColor:'#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <div className="font-bold">Novi LLC</div>
            <div className="mt-1 text-xs text-white/70">Shopify Agency | E-commerce Growth and Brand Strategy</div>
            <div className="mt-2 text-xs text-white/60">Accra, Ghana - Remote Worldwide - EST Hours</div>
            <div className="mt-2 text-xs text-white/70">We accept US ACH Wire and Euro payments via Grey - easy payment for US and EU brands.</div>
            <div className="mt-3 text-sm"><a href="mailto:hello@novi-llc.com" className="underline text-white/80">hello@novi-llc.com</a></div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/80">
            <a href="mailto:hello@novi-llc.com" className="underline font-semibold">Contact us</a>
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
