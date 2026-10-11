"use client"
import { useState } from "react"
export default function AuditForm(){
  const [sent,setSent]=useState(false)
  const [sending,setSending]=useState(false)
  async function onSubmit(e:any){
    e.preventDefault()
    setSending(true)
    const fd = new FormData(e.target)
    try{
      const res = await fetch("/api/audit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({store:fd.get("store"),revenue:fd.get("revenue"),email:fd.get("email")})})
      if(!res.ok) throw new Error("fail")
      setSent(true)
    }catch{ alert("Failed - try again") } finally{ setSending(false) }
  }
  if(sent) return <div className="p-8 text-center"><div className="text-3xl">✅</div><div className="mt-3 font-bold text-[#0A2A7A] text-xl">Sent! Check your email</div><div className="mt-2 text-sm opacity-60">We will audit your store in 24h.</div></div>
  return(
    <form onSubmit={onSubmit} className="space-y-3 bg-white p-6 rounded-2xl">
      <input name="store" required placeholder="yourstore.myshopify.com" className="w-full border rounded-xl px-4 py-3"/>
      <select name="revenue" className="w-full border rounded-xl px-4 py-3"><option>$10k - $20k/mo — Growing</option><option>$5k - $10k/mo</option><option>$20k - $50k/mo</option><option>$50k - $100k+/mo</option></select>
      <input name="email" type="email" required placeholder="you@brand.com" className="w-full border rounded-xl px-4 py-3"/>
      <button disabled={sending} className="w-full bg-[#0A2A7A] text-white rounded-xl py-3 font-bold">{sending?"Sending...":"Get My Free Audit →"}</button>
    </form>
  )
}
