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
        <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold">✓</div>
        <div className="mt-4 text-xl font-bold" style={{color:'#0A2A7A'}}>Diagnostic requested.</div>
        <div className="mt-2 text-sm opacity-70 leading-6" style={{color:'#0A2A7A'}}>
          We serve all stores from $1k+/mo to $100k+/mo. Loom in 24h. Accra, Ghana - EST Hours.
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
      <div className="mt-2 text-sm opacity-70 leading-6" style={{color:'#0A2A7A'}}>
        For ALL Shopify stores — $1k/mo to $100k+/mo. Loom + 3 leaks + fix plan in 24h.
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input required type="text" placeholder="Shopify URL (store.myshopify.com)" className="w-full border rounded-lg px-4 py-3 text-sm" />
        <input required type="email" placeholder="Work email" className="w-full border rounded-lg px-4 py-3 text-sm" />
        <select required className="w-full border rounded-lg px-4 py-3 text-sm bg-white">
          <option value="">Monthly revenue — we serve all</option>
          <option value="1k-5k">$1k - $5k / mo — Starting to scale</option>
          <option value="5k-10k">$5k - $10k / mo — Growing</option>
          <option value="10k-25k">$10k - $25k / mo — Scaling</option>
          <option value="25k-100k">$25k - $100k+ / mo — Established</option>
        </select>
        <button type="submit" className="w-full text-white font-bold py-3.5 rounded-lg text-sm shadow hover:opacity-90" style={{backgroundColor:'#0A2A7A'}}>
          Request Inbox Radar Diagnostic
        </button>
        <div className="text-xs text-center opacity-50 leading-4">
          Serving all stores $1k+ to $100k+. Limited 3/week.<br/>Accra, Ghana - EST Hours.
        </div>
      </form>
    </div>
  )
}
