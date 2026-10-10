"use client"
import AuditForm from './components/AuditForm'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <main className="bg-white">
      <header className="text-white sticky top-0 z-50 shadow-sm" style={{backgroundColor:'#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-lg tracking-tight">Novi LLC</div>
          <a href="mailto:hello@novi-llc.com" className="bg-white px-5 py-2.5 rounded-lg text-sm font-bold shadow" style={{color:'#0A2A7A'}}>Book a Call</a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest font-semibold opacity-60" style={{color:'#0A2A7A'}}>Shopify Agency • Accra → US Brands</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold leading-none tracking-tight" style={{color:'#0A2A7A'}}>We Turn Shopify Stores Into Growth Engines.</h1>
          <div className="mt-6 text-base leading-7 opacity-70 max-w-lg" style={{color:'#0A2A7A'}}>Shopify Agency focused on e-commerce growth, email deliverability, and brand strategy. EST hours, remote worldwide.</div>
        </div>
        <div className="bg-slate-50 p-2 rounded-2xl border"><AuditForm /></div>
      </section>

      <section id="insights" className="bg-slate-50 border-y py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-baseline gap-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{color:'#0A2A7A'}}>Insights</h2>
            <div className="h-1 w-12 rounded" style={{backgroundColor:'#0A2A7A'}}></div>
          </div>
          <div className="mt-2 text-sm opacity-60" style={{color:'#0A2A7A'}}>Real breakdowns from our Inbox Radar system. No fluff.</div>

          <div className="mt-10 grid gap-6">

            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition p-7 md:p-8 flex gap-5">
              <div className="hidden md:flex h-10 w-10 rounded-full items-center justify-center text-sm font-bold text-white shrink-0" style={{backgroundColor:'#0A2A7A'}}>01</div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-blue-50" style={{color:'#0A2A7A'}}>INBOX RADAR</span>
                  <span className="text-xs opacity-50">3 min read</span>
                </div>
                <div className="mt-3 text-xl md:text-2xl font-bold leading-tight" style={{color:'#0A2A7A'}}>Why Your Klaviyo Flows Lose 23 Percent Revenue</div>
                <div className="mt-5 grid md:grid-cols-3 gap-4 text-sm leading-6">
                  <div className="bg-slate-50 rounded-xl p-4 border">
                    <div className="font-bold" style={{color:'#0A2A7A'}}>Trigger Delay</div>
                    <div className="mt-1 opacity-70">1 hour to 5 mins = plus 11 percent recovery</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border">
                    <div className="font-bold" style={{color:'#0A2A7A'}}>No SMS Fallback</div>
                    <div className="mt-1 opacity-70">If email lands in spam, fire SMS after 30 mins</div>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 border">
                    <div className="font-bold" style={{color:'#0A2A7A'}}>Bad Exclusion</div>
                    <div className="mt-1 opacity-70">Brands block engaged users by mistake</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition p-7 md:p-8 flex gap-5">
              <div className="hidden md:flex h-10 w-10 rounded-full items-center justify-center text-sm font-bold text-white shrink-0" style={{backgroundColor:'#0A2A7A'}}>02</div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800">CASE STUDY</span>
                  <span className="text-xs opacity-50">72h inbox, 14 days full</span>
                </div>
                <div className="mt-3 text-xl md:text-2xl font-bold leading-tight" style={{color:'#0A2A7A'}}>From Spam to Inbox in 72h - Full Recovery in 14 Days</div>
                <div className="mt-5 border-l-2 pl-5 space-y-4 text-sm leading-7" style={{borderColor:'#0A2A7A'}}>
                  <div><span className="font-bold">Day 1-2:</span> <span className="opacity-70">SPF / DKIM / DMARC broken plus 38 percent dead list. Cleaned list, fixed DNS.</span></div>
                  <div><span className="font-bold">Day 3:</span> <span className="opacity-70">Inbox hit 92 percent - first sales from spam folder after 72h.</span></div>
                  <div><span className="font-bold">Day 4-14:</span> <span className="opacity-70">Warmed domain 100 to 5000 per day. Recovered 23 percent lost revenue. Industry needs 30 days, we do 14 because we clean first.</span></div>
                </div>
                <div className="mt-4 text-xs opacity-60">Why not 1 day? Gmail needs 7 to 10 days of good behavior. Rush it and you go back to spam for 30 days.</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition p-7 md:p-8 flex gap-5">
              <div className="hidden md:flex h-10 w-10 rounded-full items-center justify-center text-sm font-bold text-white shrink-0" style={{backgroundColor:'#0A2A7A'}}>03</div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-slate-100">STRATEGY</span>
                  <span className="text-xs opacity-50">2026 Update</span>
                </div>
                <div className="mt-3 text-xl md:text-2xl font-bold leading-tight" style={{color:'#0A2A7A'}}>Shopify SEO in 2026</div>
                <div className="mt-4 text-sm leading-7 opacity-70 max-w-3xl" style={{color:'#0A2A7A'}}>Google now ranks Shopify on EEAT plus Core Web Vitals, not just keywords. We fix collection schema, site speed, and UGC reviews to rank collections above competitors. Result: More organic traffic, lower CAC, and owned growth.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="text-white py-12" style={{backgroundColor:'#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="font-bold text-lg">Novi LLC</div>
            <div className="mt-2 text-sm text-white/60 max-w-xs">Shopify Agency | E-commerce Growth and Brand Strategy. Accra, Ghana - Remote Worldwide - EST Hours.</div>
            <div className="mt-3 text-sm"><a href="mailto:hello@novi-llc.com" className="underline text-white/80">hello@novi-llc.com</a></div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/80 h-fit">
            <a href="mailto:hello@novi-llc.com" className="underline font-semibold">Contact us</a>
            <a href="https://www.linkedin.com/in/floran-novi-llc/" target="_blank" className="underline">LinkedIn</a>
            <a href="https://x.com/novi_llc" target="_blank" className="underline">X</a>
            <a href="https://wa.me/233243876362" target="_blank" className="underline">WhatsApp</a>
            <a href="mailto:hello@novi-llc.com" className="underline">Email</a>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </main>
  )
}
