"use client"
import { useState } from 'react'

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const formData = new FormData(form)
    const email = formData.get('email')
    const store = formData.get('store') || (formData.get('store_url') as string) || 'unknown'

    // Try common field names
    const storeValue = (formData.get('shopify') as string) || (formData.get('store') as string) || (form.querySelector('input[placeholder*="Shopify"]') as HTMLInputElement)?.value || 'not provided'

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email || storeValue, store: storeValue }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setSubmitted(true)
    } catch (err) {
      alert('Failed: ' + (err as Error).message + ' - please WhatsApp us')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border shadow-sm p-7">
        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold">✓</div>
        <div className="mt-2 text-sm opacity-70">We serve all stores from $10k/mo to $100k/mo. Loom in 24h. Accra, Ghana - EST Hours.</div>
        <div className="mt-2 text-sm font-bold">Diagnostic requested. ✓</div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border shadow-sm p-8 md:p-7">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-blue-50">INBOX RADAR DIAGNOSTIC</span>
      </div>
      <div className="mt-4 text-xl font-bold leading-tight">Find Your 23% Revenue Leak. For ALL Shopify stores - $10/mo to $100k/mo. Loom + 3 leaks + fix plan in 24h.</div>
      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input required name="email" type="email" placeholder="Work email" className="w-full border rounded-lg px-4 py-3 text-sm" />
        <input required name="store" type="text" placeholder="Shopify URL. (store.myshopify.com)" className="w-full border rounded-lg px-4 py-3 text-sm" />
        <button disabled={loading} type="submit" className="w-full bg-black text-white rounded-lg py-3 text-sm font-semibold">
          {loading ? 'Sending...' : 'Get My Free Diagnostic'}
        </button>
      </form>
    </div>
  )
}
