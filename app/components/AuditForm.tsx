"use client"
import { useState } from "react"

export default function AuditForm(){
  const [sent,setSent]=useState(false)
  const [sending,setSending]=useState(false)

  async function onSubmit(e:any){
    e.preventDefault()
    setSending(true)
    const data = Object.fromEntries(new FormData(e.target).entries())
    console.log("LEAD:", data)
    // Simulate sending - always succeeds
    await new Promise(r=>setTimeout(r,800))
    setSending(false)
    setSent(true)
  }

  if(sent){
    return(
      <div className="p-8 text-center">
        <div className="text-3xl">✅</div>
        <div className="mt-3 font-bold text-[#0A2A7A] text-xl">Sent! Check your email</div>
        <div className="mt-2 text-sm opacity-60">We logged your store: check console. Email integration next.</div>
      </div>
    )
  }

  return(
    <form onSubmit={onSubmit} className="space-y-3 bg-white p-6 rounded-2xl">
      <input name="store" required placeholder="teststore.myshopify.com" className="w-full border rounded-xl px-4 py-3 text-[#0A2A7A]"/>
      <select name="revenue" className="w-full border rounded-xl px-4 py-3 text-[#0A2A7A]">
        <option>$10k - $20k/mo — Growing</option>
        <option>$5k - $10k/mo — Just Started</option>
        <option>$20k - $50k/mo — Scaling</option>
        <option>$50k - $100k+/mo — Established</option>
      </select>
      <input name="email" type="email" required placeholder="you@brand.com" className="w-full border rounded-xl px-4 py-3 text-[#0A2A7A]"/>
      <button disabled={sending} className="w-full bg-[#0A2A7A] text-white rounded-xl py-3 font-bold">
        {sending ? "Sending..." : "Get My Free Audit →"}
      </button>
    </form>
  )
}
