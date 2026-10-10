"use client"
import { useState } from 'react'

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border shadow-sm p-7">
        <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center">✓</div>
        <div className="mt-4 text-xl font-bold" style={{color:'#0A2A7A'}}>Diagnostic requested.</div>
        <div className="mt-2 text-sm opacity-70 leading-6" style={{color:'#0A2A7A'}}>
          We serve all Shopify stores from $1k+/mo. If you qualify, you get Loom in 24h.
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-6 md:p-7">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-blue-50" style={{color:'#0A2A7A'}}>INBOX RADAR DIAGNOSTIC</span>
        <span className="text-xs opacity-50">$500 value • Free this week</span>
      </div>

      <div className="mt-4 text-xl font-bold leading-tight" style={{color:'#0A2A7A'}}>Find Your 23% Revenue Leak.</div>
      <div className="mt-2 text-sm opacity-70 leading-6" style={{color:'#0A2A7A'}}>For all Shopify stores doing $1k+/mo and up to $100k+/mo. See what you lose.</div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
        <div className="bg-slate-50 border rounded-lg p-2 text-center"><div className="font-bold">$1k/mo</div><div className="opacity-60">$230 lost</div></div>
        <div className="bg-slate-50 border rounded-lg p-2 text-center"><div className="font-bold">$5k/mo</div><div className="opacity-60">$1,150 lost</div></div>
        <div className="bg-slate-50 border rounded-lg p-2 text-center"><div className="font-bold">$20k/mo</div><div className="opacity-60">$4,600 lost</div></div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input required type="text" placeholder="Shopify URL (store.myshopify.com)" className="w-full border rounded-lg px-4 py-3 text-sm" />
        <input required type="email" placeholder="Work email" className="w-full border rounded-lg px-4 py-3 text-sm" />
        <select required className="w-full border rounded-lg px-4 py-3 text-sm bg-white">
          <option value="">Monthly revenue</option>
          <option value="1k-5k">$1k - $5k / mo - Starting to scale</option>
          <option value="5k-10k">$5k - $10k / mo - Growing</option>
          <option value="10k-25k">$10k - $25k / mo - Scaling</option>
          <option value="25k-100k">$25k - $100k+ / mo - Established</option>
        </select>
        <button type="submit" className="w-full text-white font-bold py-3.5 rounded-lg text-sm shadow" style={{backgroundColor:'#0A2A7A'}}>Request Inbox Radar Diagnostic</button>
        <div className="text-xs text-center opacity-50 leading-4">Serving all stores from $1k+/mo. Limited to 3/week. Loom + fix plan in 24h.<br/>Accra, Ghana - EST Hours.</div>
      </form>
    </div>
  )
}
