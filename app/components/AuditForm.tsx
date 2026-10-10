'use client'
import { useState } from 'react'

export default function AuditForm() {
  const [email, setEmail] = useState('')
  const [store, setStore] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, store })
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Sent ✓ Check email! Loom in 24h')
        setEmail('')
        setStore('')
      } else {
        setStatus('Error: ' + data.error)
      }
    } catch {
      setStatus('Error, try again')
    }
  }

  return (
    <div className="p-6 border rounded-xl bg-neutral-50 dark:bg-neutral-900">
      <h3 className="font-semibold mb-4">Get My Free Email Health Check — 3 spots this week. 10-min Loom in 24h.</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your work email" required className="w-full p-3 border rounded-lg bg-white text-black" />
        <input type="text" value={store} onChange={(e) => setStore(e.target.value)} placeholder="Shopify URL (e.g. nike.com)" required className="w-full p-3 border rounded-lg bg-white text-black" />
        <button type="submit" className="w-full bg-black text-white p-3 rounded-lg font-bold">Get My Free $150 Audit →</button>
        <p className="text-sm text-green-600">{status}</p>
      </form>
    </div>
  )
}
