'use client'
import { useState } from 'react'
import { BlogPosts } from "app/components/posts"

export default function Page() {
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
    } catch (err: any) {
      setStatus('Error, try again')
    }
  }

  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        I help US Shopify brands doing $10k/mo recover 30% revenue with email.
      </h1>
      <p className="mb-4">
        I'm Novi — email retention specialist for Shopify. I audit Klaviyo / Omnisend and fix 3 leaks: no post-purchase flow, generic cart recovery, no VIP.
      </p>
      <p className="mb-8">
        I work async from Ghana, so you get a 10-min Loom teardown in 24h while you sleep. No meetings needed. Focused on one thing: email that prints money.
      </p>

      <div className="mb-8 p-6 border rounded-xl bg-neutral-50 dark:bg-neutral-900">
        <h3 className="font-semibold mb-4">Get My Free Email Health Check — 3 spots this week. 10-min Loom in 24h.</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your work email" 
            required 
            className="w-full p-3 border rounded-lg bg-white text-black" 
          />
          <input 
            type="text" 
            value={store}
            onChange={(e) => setStore(e.target.value)}
            placeholder="Shopify URL (e.g. nike.com)" 
            required 
            className="w-full p-3 border rounded-lg bg-white text-black" 
          />
          <button type="submit" className="w-full bg-black text-white p-3 rounded-lg font-bold hover:bg-zinc-800">
            Get My Free $150 Audit →
          </button>
          <p className="text-sm text-green-600">{status}</p>
        </form>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
