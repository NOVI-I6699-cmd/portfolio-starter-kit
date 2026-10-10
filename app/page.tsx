"use client"
import AuditForm from './components/AuditForm'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <header className="text-white sticky top-0 z-50" style={{backgroundColor:'#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold">Novi LLC</div>
          <a href="mailto:hello@novi-llc.com" className="bg-white px-4 py-2 rounded text-sm font-bold" style={{color:'#0A2A7A'}}>Book a Call</a>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold" style={{color:'#0A2A7A'}}>We Turn Shopify Stores Into Growth Engines.</h1>
        </div>
        <div><AuditForm /></div>
      </section>

      <section id="insights" className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold" style={{color:'#0A2A7A'}}>Insights</h2>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#klaviyo-23" className="border p-5 rounded-lg block hover:shadow-md">
            <div className="text-xs uppercase">INBOX RADAR</div>
            <div className="mt-2 font-bold" style={{color:'#0A2A7A'}}>Why Your Klaviyo Flows Lose 23 Percent Revenue</div>
            <div className="mt-2 text-sm underline">Click to read breakdown</div>
          </a>
          <a href="#deliverability-72h" className="border p-5 rounded-lg block hover:shadow-md">
            <div className="text-xs uppercase">CASE STUDY</div>
            <div className="mt-2 font-bold" style={{color:'#0A2A7A'}}>From Spam to Inbox in 72h - Full Recovery in 14 Days</div>
            <div className="mt-2 text-sm underline">Click to see how we fixed it</div>
          </a>
          <a href="#shopify-seo" className="border p-5 rounded-lg block hover:shadow-md">
            <div className="text-xs uppercase">STRATEGY</div>
            <div className="mt-2 font-bold" style={{color:'#0A2A7A'}}>Shopify SEO in 2026</div>
            <div className="mt-2 text-sm underline">Click to read strategy</div>
          </a>
        </div>

        <div className="mt-20 space-y-10">
          <div id="klaviyo-23" className="bg-slate-50 p-6 rounded-xl border scroll-mt-28">
            <div className="text-xs uppercase">INBOX RADAR</div>
            <div className="mt-2 text-xl font-bold" style={{color:'#0A2A7A'}}>Why Klaviyo Loses 23 Percent Revenue</div>
            <div className="mt-4 text-sm leading-7">
              <div>1. Trigger delay 1 hour - We cut to 5 mins = plus 11 percent recovery.</div>
              <div className="mt-2">2. No SMS fallback - If email is in spam, we fire SMS after 30 mins.</div>
              <div className="mt-2">3. Wrong exclusion filter - Brands block engaged users by mistake.</div>
            </div>
          </div>

          <div id="deliverability-72h" className="bg-slate-50 p-6 rounded-xl border scroll-mt-28">
            <div className="text-xs uppercase">CASE STUDY</div>
            <div className="mt-2 text-xl font-bold" style={{color:'#0A2A7A'}}>How We Fixed Deliverability - Inbox in 72h, Full in 14 Days</div>
            <div className="mt-4 text-sm leading-7">
              <div>Day 1-2: SPF DKIM DMARC broken plus 38 percent dead list. Cleaned list, fixed DNS.</div>
              <div className="mt-2">Day 3: Inbox hit 92 percent - first sales from spam folder after 72h.</div>
              <div className="mt-2">Day 4-14: Warmed domain 100 to 5000 per day. Recovered 23 percent lost revenue.</div>
              <div className="mt-2">Why 14 days not 1 day: Gmail needs 7 to 10 days of good behavior. Rush it and you go back to spam for 30 days.</div>
            </div>
          </div>

          <div id="shopify-seo" className="bg-slate-50 p-6 rounded-xl border scroll-mt-28">
            <div className="text-xs uppercase">STRATEGY</div>
            <div className="mt-2 text-xl font-bold" style={{color:'#0A2A7A'}}>Shopify SEO in 2026</div>
            <div className="mt-4 text-sm leading-7">
              <div>Google now ranks Shopify on EEAT plus Core Web Vitals, not just keywords. We fix collection schema, speed, and UGC reviews.</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-white py-12" style={{backgroundColor:'#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="text-xl font-bold">Novi LLC</div>
            <div className="mt-3 text-sm text-white/80">Accra, Ghana - Remote Worldwide</div>
            <div className="mt-1 text-sm"><a href="mailto:hello@novi-llc.com" className="underline">hello@novi-llc.com</a></div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm">
            <a href="mailto:hello@novi-llc.com" className="underline">Contact us</a>
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
