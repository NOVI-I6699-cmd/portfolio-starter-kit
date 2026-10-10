"use client"
import { useState } from 'react'

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Replace with your actual form handling - Formspree, API, etc
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border shadow-sm p-7">
        <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center">✓</div>
        <div className="mt-4 text-xl font-bold" style={{color:'#0A2A7A'}}>Diagnostic requested.</div>
        <div className="mt-2 text-sm opacity-70 leading-6" style={{color:'#0A2A7A'}}>
          We review stores doing $5k+/mo only. If you qualify, you will get your Inbox Radar Loom in 24h with 3 leaks and fix plan.
        </div>
        <div className="mt-4 text-xs opacity-50">Check hello@novi-llc.com in spam too.</div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-7">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-blue-50" style={{color:'#0A2A7A'}}>INBOX RADAR DIAGNOSTIC</span>
        <span className="text-xs opacity-50">$500 value • Free this week</span>
      </div>

      <div className="mt-4 text-xl font-bold leading-tight" style={{color:'#0A2A7A'}}>We Find The 23% Revenue You Are Leaking.</div>
      
      <div className="mt-3 text-sm leading-6 opacity-70" style={{color:'#0A2A7A'}}>
        For Shopify stores doing $5k+/mo:
        <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
          <div className="bg-slate-50 border rounded-lg p-2 text-center"><div className="font-bold">$5k/mo</div><div className="opacity-60">$1,150 lost</div></div>
          <div className="bg-slate-50 border rounded-lg p-2 text-center"><div className="font-bold">$20k/mo</div><div className="opacity-60">$4,600 lost</div></div>
          <div className="bg-slate-50 border rounded-lg p-2 text-center"><div className="font-bold">$50k/mo</div><div className="opacity-60">$11.5k lost</div></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <input 
          required
          type="text" 
          placeholder="Shopify store URL (novi.myshopify.com)" 
          className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20"
        />
        <input 
          required
          type="email" 
          placeholder="Work email" 
          className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20"
        />
        <select required className="w-full border rounded-lg px-4 py-3 text-sm bg-white">
          <option value="">Monthly revenue</option>
          <option value="5k-10k">$5k - $10k / mo</option>
          <option value="10k-25k">$10k - $25k / mo</option>
          <option value="25k-50k">$25k - $50k / mo</option>
          <option value="50k+">$50k+ / mo</option>
        </select>
        <select className="w-full border rounded-lg px-4 py-3 text-sm bg-white">
          <option value="">Biggest leak? (optional)</option>
          <option value="deliverability">Emails going to spam</option>
          <option value="klaviyo">Klaviyo flows not converting</option>
          <option value="seo">Shopify SEO / traffic</option>
          <option value="conversion">Store not converting</option>
        </select>

        <button 
          type="submit" 
          className="w-full text-white font-bold py-3.5 rounded-lg text-sm shadow hover:opacity-90 transition"
          style={{backgroundColor:'#0A2A7A'}}
        >
          Request Inbox Radar Diagnostic
        </button>

        <div className="text-xs text-center opacity-50 leading-4">
          Limited to 3 diagnostics per week. For stores doing $5k+/mo only.<br/>Loom + 3 leaks + fix plan in 24h.
        </div>
      </form>
    </div>
  )
}
