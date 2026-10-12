"use client"
import { useState } from 'react'

export default function AuditForm(){
  const [loading,setLoading] = useState(false)
  const [done,setDone] = useState(false)
  const [storeUrl,setStoreUrl] = useState("")
  const [email,setEmail] = useState("")

  const submit = async (e:any)=>{
    e.preventDefault()
    if(!storeUrl ||!email) return alert("Add store URL + email")
    setLoading(true)
    // Simulate send to info@novi-llc.com
    await new Promise(r=>setTimeout(r,900))
    setLoading(false)
    setDone(true)
  }

  if(done){
    return (
      <div className="bg-white rounded-xl p-6 border text-center">
        <div className="text-2xl">✅</div>
        <p className="mt-2 font-bold text-[#0A2A7A]">Audit request sent!</p>
        <p className="mt-1 text-xs opacity-60">We will email 3 leaks in 24h to {email}<br/>NOVI LLC • 1234, Accra, Ghana • info@novi-llc.com</p>
        <button onClick={()=>setDone(false)} className="mt-4 text-xs underline opacity-60">Send another</button>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-xl p-5 border space-y-3">
      <p className="text-sm font-bold text-[#0A2A7A]">Get your free leak audit — 24h</p>
      <p className="text-xs opacity-60">We find $1,150 to $23k lost revenue. EST hours • Accra to US brands.</p>

      <input
        value={storeUrl}
        onChange={e=>setStoreUrl(e.target.value)}
        placeholder="Your Shopify URL (e.g. novi-llc.com)"
        className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[#0A2A7A]"
        required
      />
      <input
        value={email}
        onChange={e=>setEmail(e.target.value)}
        type="email"
        placeholder="Work email"
        className="w-full px-4 py-3 rounded-lg border text-sm outline-none focus:border-[#0A2A7A]"
        required
      />
      <select className="w-full px-4 py-3 rounded-lg border text-sm outline-none bg-white">
        <option>Monthly revenue: $5k-$10k</option>
        <option>$10k-$20k</option>
        <option>$20k-$50k</option>
        <option>$50k-$100k+</option>
      </select>

      <button disabled={loading} type="submit" className="w-full py-3 rounded-lg bg-[#0A2A7A] text-white text-sm font-bold disabled:opacity-50">
        {loading? "Sending..." : "Find My 23% Leak →"}
      </button>

      <p className="text-[10px] opacity-50 text-center">Sent to info@novi-llc.com • We accept ACH Wire + Euro via Grey • No spam • 1234, Accra, Ghana</p>
    </form>
  )
}
