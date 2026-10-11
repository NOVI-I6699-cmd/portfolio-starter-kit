"use client"
import AuditForm from "./components/AuditForm"
import WhatsAppButton from "./components/WhatsAppButton"
export default function Home(){
 return(
  <main className="bg-white">
   <header className="text-white sticky top-0 z-50 bg-[#0A2A7A]">
    <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
     <div className="font-bold">Novi LLC</div>
     <a href="mailto:hello@novi-llc.com" className="bg-white text-[#0A2A7A] px-5 py-2.5 rounded-lg text-sm font-bold">Book a Call</a>
    </div>
   </header>
   <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
    <div>
     <div className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 border text-[#0A2A7A] inline-flex">Serving Shopify stores from $5k+ to $100k+ per month - 3 spots left</div>
     <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#0A2A7A] leading-none">Shopify Stores Leak 23% Revenue. We Find It.</h1>
     <div className="mt-4 opacity-70">Inbox Radar finds leaks in 24h. Fixed in 14 days.</div>
    </div>
    <div className="bg-slate-50 p-2 rounded-2xl border"><AuditForm/></div>
   </section>
   <footer className="text-white py-10 bg-[#0A2A7A]"><div className="max-w-7xl mx-auto px-6">Novi LLC - Accra, Ghana - hello@novi-llc.com</div></footer>
   <WhatsAppButton/>
  </main>
 )
}
