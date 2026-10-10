'use client'
import { useState } from 'react'

export default function AuditForm() {
  const [email, setEmail] = useState('')
  const [store, setStore] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, store }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'API error')
      setStatus('success')
      setEmail(''); setStore('')
    } catch (err: any) {
      setError(err.message); setStatus('error')
    }
  }

  return (
    <div className="w-full max-w-[440px] mt-8 border border-[#0A2A7A] rounded-2xl p-6 bg-white shadow-[0_20px_60px_rgba(10,42,122,0.12)]">
      <div className="flex justify-between items-center mb-4">
        <span className="font-[var(--font-playfair)] text-[#0A2A7A] font-medium">Novi LLC</span>
        <span className="text-[10px] bg-[#0A2A7A] text-white px-2.5 py-1 rounded-full">FREE $150 AUDIT</span>
      </div>
      <h3 className="font-[var(--font-playfair)] text-[#0A2A7A] text-xl leading-tight">Shopify Stores Leaking Money? Get Your $150 Audit FREE</h3>
      <p className="text-sm text-[#0A2A7A]/70 mt-2 mb-5">White + Novi Blue text, centered — mobile-safe. 20% empty space for profile.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="founder@brand.com" className="w-full border border-[#0A2A7A]/20 focus:border-[#0A2A7A] p-3.5 rounded-xl outline-none text-[#0A2A7A] placeholder:text-[#0A2A7A]/40" />
        <input required type="text" value={store} onChange={e=>setStore(e.target.value)} placeholder="yourstore.com" className="w-full border border-[#0A2A7A]/20 focus:border-[#0A2A7A] p-3.5 rounded-xl outline-none text-[#0A2A7A] placeholder:text-[#0A2A7A]/40" />
        <button disabled={status==='loading'} type="submit" className="w-full bg-[#0A2A7A] text-white font-medium py-3.5 rounded-xl hover:bg-[#0A2A7A]/90 transition disabled:opacity-50">
          {status==='loading'?'Sending...':'Get My Free $150 Audit →'}
        </button>
      </form>
      {status==='success' && <div className="mt-3 bg-[#0A2A7A]/5 border border-[#0A2A7A]/10 text-[#0A2A7A] text-sm p-3 rounded-xl text-center">Sent ✓ Check email! Loom in 24h</div>}
      {status==='error' && <div className="mt-3 bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-xl text-center">{error}</div>}
    </div>
  )
}
