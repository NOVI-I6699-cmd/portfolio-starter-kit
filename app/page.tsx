import Link from 'next/link';
import AuditForm from "./components/AuditForm";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "Novi LLC — Shopify Leak-Detection System: Inbox Radar + Klaviyo + AI Agents — Accra, Ghana",
  description: "Stop losing 23% of Shopify revenue. Inbox Radar finds deliverability, Klaviyo, SEO and AI automation leaks in 24h. Fixed in 14 days. Accra, Ghana — Remote Worldwide — EST Hours — Founder: Floran Dieudonnie.",
  openGraph: {
    title: "Novi LLC — Shopify Leak-Detection System: Inbox Radar + Klaviyo + AI Agents",
    description: "We turn 23% lost sales into retained revenue for $5k-$100k/mo Shopify stores. Accra, Ghana — Founder Floran Dieudonnie.",
    url: "https://novi-llc.com",
    siteName: "Novi LLC Ghana",
    images: [{ url: "https://novi-llc.com/novi-logo.jpg", width: 800, height: 800, alt: "Novi LLC Ghana" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novi LLC — Shopify Leak-Detection System: Inbox Radar + Klaviyo + AI Agents",
    images: ["https://novi-llc.com/novi-logo.jpg"],
  },
};

export default function Home() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Novi LLC",
        "url": "https://novi-llc.com",
        "logo": "https://novi-llc.com/novi-logo.jpg",
        "description": "Novi LLC - Shopify Leak-Detection System: Inbox Radar + Klaviyo + AI Agents. Accra, Ghana. Founder Floran Dieudonnie. Not affiliated with NOVI LLC in Arlington, Virginia, USA.",
        "address": { "@type": "PostalAddress", "addressLocality": "Accra", "addressCountry": "Ghana" },
        "founder": { "@type": "Person", "name": "Floran Dieudonnie" }
      })}} />

      <header className="text-white sticky top-0 z-50 shadow-sm" style={{backgroundColor: '#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/novi-logo.jpg" alt="Novi LLC Ghana" className="h-11 w-11 rounded-full object-cover border-2 border-white shadow-sm" />
            <div className="flex flex-col leading-none">
              <div className="text-[11px] tracking-wide font-semibold" style={{color: 'rgba(255,255,255,0.9)'}}>Shopify Leak-Detection System: Inbox Radar + Klaviyo + AI Agents</div>
              <div className="text-[11px] mt-0.5" style={{color: 'rgba(255,255,255,0.5)'}}>Accra, Ghana - Remote Worldwide - EST Hours | Founder: Floran Dieudonnie</div>
            </div>
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
          <h1 className="mt-5 text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] max-w-[560px]" style={{color: '#0A2A7A', fontFamily: 'serif'}}>
            Stop Losing 23% of Your Shopify Revenue
          </h1>
          <p className="mt-4 text-[17px] md:text-[18px] leading-7 max-w-[640px]" style={{color: '#5A5A5A'}}>
            Whether you do $5k or $100k/month — Inbox Radar finds your deliverability, Klaviyo, SEO and AI automation leaks in 24 hours. Fixed in 14 days.
          </p>
        </div>
        <div className="bg-slate-50 p-2 rounded-2xl border shadow-sm"><AuditForm /></div>
      </section>

      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#0A2A7A'}}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-[360px_minmax(0,1fr)] gap-12 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-[300px] h-[300px] rounded-full border-[6px] border-white overflow-hidden shadow-2xl" style={{backgroundColor: '#123A9A'}}>
              <img src="/founder-floran-dieudonnie-novi-llc.jpg" alt="Floran Dieudonnie Founder Novi LLC Ghana" className="w-full h-full object-cover" />
            </div>
            <p className="mt-5 text-[11px] tracking-[0.2em] uppercase" style={{color: 'rgba(255,255,255,0.6)'}}>Founder - Novi LLC Ghana</p>
            <p className="text-sm font-bold text-white">Floran Dieudonnie</p>
          </div>
          <div className="text-white min-w-0">
            <h2 className="text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] break-words" style={{fontFamily: 'serif'}}>Built by an operator, not an agency.</h2>
            <div className="mt-6 space-y-4 text-[16px] leading-8 break-words" style={{color: '#FFFFFF'}}>
              <p>I am Floran Dieudonnie, Founder at Novi LLC. Built in Accra, Ghana — with a laptop and an obsession for finding hidden revenue Shopify owners leave on the table.</p>
              <p>Our data is clear: the average store forfeits 23% to silent killers — emails trapped in spam, broken Klaviyo flows, SEO gaps, and manual support killing conversions.</p>
              <p className="font-semibold tracking-wide" style={{color: 'rgba(255,255,255,0.7)'}}>Novi LLC — Shopify Leak-Detection System: Inbox Radar + Klaviyo + AI Agents — Accra, Ghana</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative text-white py-16 overflow-hidden" style={{backgroundColor: '#0A2A7A'}}>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-center gap-2">
                <img src="/novi-logo.jpg" alt="Novi LLC Ghana" className="h-11 w-11 rounded-full object-cover border border-white/20 shadow-sm" />
                <span className="font-bold text-lg">Novi LLC Ghana</span>
              </div>
              <div className="mt-1 text-sm" style={{color: 'rgba(255,255,255,0.8)'}}>Shopify Leak-Detection System: Inbox Radar + Klaviyo + AI Agents</div>
              <div className="mt-2 text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>Accra, Ghana - Remote Worldwide - EST Hours — Founder: Floran Dieudonnie</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[0.3em]" style={{color: 'rgba(255,255,255,0.6)'}}>Built From</div>
              <div className="text-4xl font-black leading-none mt-1 tracking-tight">ACCRA GHANA</div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex justify-between gap-4 text-xs" style={{borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)'}}>
            <div>© 2026 Novi LLC Ghana — Accra, Ghana — Founded by Floran Dieudonnie</div>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}
