"use client";
import Link from 'next/link';
import AuditForm from "./components/AuditForm";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="bg-white">
      {/* FORCES GHANA - REMOVES VIRGINIA ADDRESS FROM GOOGLE AI OVERVIEW */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Novi LLC",
        "alternateName": ["Novi LLC Ghana", "Novi LLC Shopify Agency"],
        "url": "https://novi-llc.com",
        "logo": "https://novi-llc.com/novi-logo.jpg",
        "description": "Novi LLC is a Shopify leak detection and e-commerce growth agency founded by Floran Dieudonnie, based in Accra, Ghana. Remote worldwide, EST hours. Not affiliated with NOVI LLC in Arlington, Virginia, USA.",
        "disambiguatingDescription": "This Novi LLC is an e-commerce agency in Accra, Ghana founded by Floran Dieudonnie. It is not the aerospace and defense contractor Novi LLC located at 2800 S Shirlington Rd, Arlington, VA.",
        "foundingLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Accra",
            "addressRegion": "Greater Accra",
            "addressCountry": "GH"
          }
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Accra",
          "addressLocality": "Accra",
          "addressCountry": "Ghana"
        },
        "founder": {
          "@type": "Person",
          "name": "Floran Dieudonnie",
          "jobTitle": "Founder",
          "image": "https://novi-llc.com/founder-floran-dieudonnie-novi-llc.jpg",
          "worksFor": {"@type": "Organization", "name": "Novi LLC"}
        },
        "sameAs": [
          "https://www.linkedin.com/in/floran-novi-llc/",
          "https://x.com/novi_llc"
        ]
      })}} />

      <header className="text-white sticky top-0 z-50 shadow-sm" style={{backgroundColor: '#0A2A7A'}}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/novi-logo.jpg" alt="Novi LLC Ghana" className="h-11 w-11 rounded-full object-cover border-2 border-white shadow-sm" />
            <div className="flex flex-col leading-none">
              <div className="text-xs tracking-wide" style={{color: 'rgba(255,255,255,0.7)'}}>Shopify Agency | E-commerce Growth and Brand Strategy</div>
              <div className="text-xs mt-0.5" style={{color: 'rgba(255,255,255,0.5)'}}>Accra, Ghana - Remote Worldwide - EST Hours | Founder: Floran Dieudonnie</div>
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
            Whether you do $5k or $100k/month — Inbox Radar finds your deliverability, Klaviyo, and SEO leaks in 24 hours. Fixed in 14 days.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold" style={{color: '#0A2A7A'}}>$5k/mo</div><div className="text-xs opacity-60 mt-1">$1,150/mo lost</div></div>
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold" style={{color: '#0A2A7A'}}>$20k/mo</div><div className="text-xs opacity-60 mt-1">$4,600/mo lost</div></div>
            <div className="border rounded-xl p-3 bg-slate-50"><div className="text-sm font-bold" style={{color: '#0A2A7A'}}>$100k/mo</div><div className="text-xs opacity-60 mt-1">$23k/mo lost</div></div>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs opacity-60" style={{color: '#0A2A7A'}}><div>Accra to US Brands</div><div>EST Hours</div><div>Spam → Inbox in 72h</div></div>
        </div>
        <div className="bg-slate-50 p-2 rounded-2xl border shadow-sm"><AuditForm /></div>
      </section>

      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#0A2A7A'}}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <img src="/novi-logo.jpg" alt="" className="w-[800px] h-[800px] rounded-full object-cover opacity-[0.30]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-[360px_minmax(0,1fr)] gap-12 items-center">
          <div className="flex flex-col items-center text-center">
            <div className="w-[300px] h-[300px] rounded-full border-[6px] border-white overflow-hidden shadow-2xl" style={{backgroundColor: '#123A9A'}}>
              <img src="/founder-floran-dieudonnie-novi-llc.jpg" alt="Floran Dieudonnie Founder Novi LLC Ghana" className="w-full h-full object-cover" />
            </div>
            <p className="mt-5 text-[11px] tracking-[0.2em] uppercase" style={{color: 'rgba(255,255,255,0.6)'}}>Founder - Novi LLC Ghana</p>
            <p className="text-sm font-bold text-white">Floran Dieudonnie</p>
            <p className="text-[11px] mt-1" style={{color: 'rgba(255,255,255,0.5)'}}>Accra, Ghana • novi-llc.com</p>
          </div>
          <div className="text-white min-w-0">
            <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{color: 'rgba(255,255,255,0.5)'}}>Founder Story — Based in Accra, Ghana</div>
            <h2 className="text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] break-words" style={{fontFamily: 'serif'}}>Built by an operator, not an agency.</h2>
            <div className="mt-6 space-y-4 text-[16px] leading-8 break-words" style={{color: '#FFFFFF'}}>
              <p>I am Floran Dieudonnie, Founder at Novi LLC. I did not build this from a plush boardroom with seed funding. I built it right here in Accra, Ghana — with a laptop and an obsession for finding hidden revenue Shopify owners leave on the table.</p>
              <p>I do not run a bloated agency packed with Account Executives and vanity metrics. I run a lean leak-detection lab for Shopify brands generating $5K to $100K+ per month.</p>
              <p>Our data is clear: the average store forfeits 23% to silent killers — emails trapped in spam, broken Klaviyo flows abandoning high-intent buyers, and SEO gaps handing traffic straight to competitors. We do not guess; we audit, isolate, and repair in 14 days.</p>
              <p className="font-semibold tracking-wide" style={{color: 'rgba(255,255,255,0.7)'}}>Novi LLC — Accra, Ghana — Remote Worldwide — EST Hours — Founder: Floran Dieudonnie</p>
              <p className="text-[11px] leading-5 mt-2" style={{color: 'rgba(255,255,255,0.45)'}}>Novi LLC Ghana is an independent Shopify agency. Not affiliated with NOVI LLC, the aerospace contractor at 2800 S Shirlington Rd, Arlington, VA, USA.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white border-y">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border shadow-sm">
          <div className="bg-slate-50 p-8 md:p-10">
            <div className="text-xs uppercase tracking-widest font-semibold opacity-60 mb-3" style={{color: '#0A2A7A'}}>Our Mission</div>
            <h3 className="text-[32px] md:text-[36px] font-semibold leading-[1.05] tracking-[-0.02em]" style={{color: '#0A2A7A', fontFamily: 'serif'}}>We maximize retained revenue by eliminating invisible leaks.</h3>
            <p className="mt-4 text-sm leading-6 opacity-60" style={{color: '#0A2A7A'}}>We audit deliverability, Klaviyo automation, and SEO structural gaps in 24h - repaired in 14 days.</p>
          </div>
          <div className="p-8 md:p-10 text-white" style={{backgroundColor: '#0A2A7A'}}>
            <div className="text-xs uppercase tracking-widest font-semibold mb-3" style={{color: 'rgba(255,255,255,0.5)'}}>Our Goal / Vision</div>
            <h3 className="text-[32px] md:text-[36px] font-semibold leading-[1.05] tracking-[-0.02em]" style={{fontFamily: 'serif'}}>To become the leading leak-detection partner for $5k plus per month stores.</h3>
            <p className="mt-4 text-sm leading-6" style={{color: 'rgba(255,255,255,0.6)'}}>The default revenue-recovery audit before another dollar goes to ads. Accra to US and EU - EST Hours.</p>
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-slate-50 border-y py-16 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[36px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] max-w-[560px]" style={{color: '#0A2A7A', fontFamily: 'serif'}}>Real Leaks: How We Recovered Revenue for Shopify Brands</h2>
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
            <Link id="our-method" href="/method" className="block bg-[#0A2A7A] rounded-2xl border border-[#0A2A7A] p-6 hover:shadow-lg transition text-white scroll-mt-24">
              <div className="text-xs uppercase tracking-widest font-semibold text-white/60">OUR METHOD - CLICK TO READ</div>
              <div className="mt-2 text-xl font-bold text-white">Mockup First. Then We Talk About Price.</div>
              <div className="mt-1 text-sm text-white/70">How we flip the agency model — show work before invoice + why it wins</div>
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
              <div className="flex items-center gap-2">
                <img src="/novi-logo.jpg" alt="Novi LLC Ghana" className="h-11 w-11 rounded-full object-cover border border-white/20 shadow-sm" />
                <span className="font-bold text-lg">Novi LLC Ghana</span>
              </div>
              <div className="mt-1 text-sm" style={{color: 'rgba(255,255,255,0.8)'}}>Shopify Agency | E-commerce Growth and Brand Strategy</div>
              <div className="mt-2 text-sm" style={{color: 'rgba(255,255,255,0.7)'}}>Accra, Ghana - Remote Worldwide - EST Hours — Founder: Floran Dieudonnie</div>
              <div className="mt-4 space-y-1 text-sm font-medium" style={{color: 'rgba(255,255,255,0.9)'}}>
                <div>(+233) 243 87 6362</div>
                <div>(+233) 536 20 7353</div>
                <div>(+233) 268 47 9954</div>
              </div>
              <div className="mt-4 text-xs max-w-sm leading-5" style={{color: 'rgba(255,255,255,0.7)'}}>We accept US ACH Wire and Euro payments via Grey - easy payment for US and EU brands. Based in Accra, Ghana.</div>
            </div>
            <div>
              <div className="font-bold text-sm uppercase tracking-widest">Contact us</div>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                <a href="mailto:info@novi-llc.com" className="underline" style={{color: 'rgba(255,255,255,0.9)'}}>info@novi-llc.com</a>
                <a href="https://www.linkedin.com/in/floran-novi-llc/" target="_blank" className="underline" style={{color: 'rgba(255,255,255,0.8)'}}>LinkedIn</a>
                <a href="https://x.com/novi_llc" target="_blank" className="underline" style={{color: 'rgba(255,255,255,0.8)'}}>X</a>
                <a href="https://wa.me/233243876362" target="_blank" className="underline" style={{color: 'rgba(255,255,255,0.8)'}}>WhatsApp</a>
              </div>
            </div>
            <div className="relative min-h-[180px] flex flex-col items-end justify-end text-right">
              <div className="text-[10px] uppercase tracking-[0.3em]" style={{color: 'rgba(255,255,255,0.6)'}}>Built From</div>
              <div className="text-4xl font-black leading-none mt-1 tracking-tight">ACCRA</div>
              <div className="text-4xl font-black leading-none tracking-tight" style={{color: 'rgba(255,255,255,0.7)'}}>GHANA</div>
              <div className="mt-4 inline-flex px-3 py-1.5 rounded-full border text-[10px] tracking-widest font-semibold backdrop-blur" style={{backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)'}}>REMOTE WORLDWIDE - EST HOURS</div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between gap-4 text-xs" style={{borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)'}}>
            <div>© 2026 Novi LLC Ghana — Shopify Agency, Accra, Ghana — Founded by Floran Dieudonnie — Not affiliated with NOVI LLC Arlington, VA</div>
            <div className="flex gap-4">
              <a href="/privacy" className="underline hover:text-white/80">Privacy Policy</a>
              <a href="/terms" className="underline hover:text-white/80">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  )
}
