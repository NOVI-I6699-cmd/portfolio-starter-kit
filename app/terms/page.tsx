import Link from 'next/link'
export default function Terms(){
 return(
  <main className="min-h-screen bg-white">
   <div className="max-w-3xl mx-auto px-6 py-16">
    <Link href="/" className="inline-flex text-sm font-bold text-[#0A2A7A] hover:underline mb-8">← Back to Home</Link>
    <h1 className="text-4xl font-bold text-[#0A2A7A]">Terms and Conditions</h1>
    <p className="mt-3 text-sm font-semibold text-slate-600">Last updated: May 12, 2026 - NOVI LLC</p>
    <div className="mt-8 space-y-4 text-[16px] leading-8 text-slate-900">
      <p>By using novi-llc.com you agree to our services for Shopify leak detection for stores doing $5k+/mo to $100k+/mo.</p>
      <p>Payments via Grey - US ACH Wire and Euro. Contact: info@novi-llc.com - Accra, Ghana - Remote Worldwide - EST Hours.</p>
      <p className="font-bold text-[#0A2A7A]">We accept US ACH Wire and Euro payments via Grey - easy payment for US and EU brands.</p>
    </div>
   </div>
  </main>
 )
}
