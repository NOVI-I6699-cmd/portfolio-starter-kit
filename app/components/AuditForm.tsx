'use client'
import { useState } from 'react'

export default function AuditForm() {
  const [email, setEmail] = useState('')
  const [store, setStore] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      console.log('Submitting', email, store)
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, store }),
      })
      const data = await res.json()
      console.log('API returned', res.status, data)
      if (!res.ok) throw new Error(data.error || 'API error')
      setStatus('success')
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Error, try again')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="eveilsaint6699@gmail.com" className="p-3 rounded text-black" />
      <input type="text" value={store} onChange={e=>setStore(e.target.value)} placeholder="Nike.com" className="p-3 rounded text-black" />
      <button type="submit" disabled={status==='loading'} className="bg-black text-white p-3 rounded">
        {status==='loading' ? 'Sending...' : 'Get My Free $150 Audit →'}
      </button>
      {status==='success' && <p className="text-green-400">Sent ✓ Check email! Loom in 24h</p>}
      {status==='error' && <p className="text-red-400">{error}</p>}
    </form>
  )
}
