"use client"
import { useState } from 'react'

export default function AuditForm(){
const [submitted,setSubmitted]=useState(false)
const [isSerious,setIsSerious]=useState(true)
const [budget,setBudget]=useState("")
const [timeline,setTimeline]=useState("")

const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault()
const serious = budget!=="no-budget" && budget!=="" && timeline!=="just-looking" && timeline!==""
setIsSerious(serious)
setSubmitted(true)
}

if(submitted){
if(!isSerious){
return <div className="bg-white rounded-2xl border shadow-sm p-7"><div className="text-xl font-bold text-[#0A2A7A]">Application received.</div><div className="mt-2 text-sm opacity-70 leading-6">We prioritize stores ready to invest $750+ to fix in next 14 days. We'll keep you on file. Re-apply when ready.<br/><br/>Pay via US Bank (Grey) — Easy for US stores.<br/>Accra, Ghana - EST Hours.</div></div>
}
return <div className="bg-white rounded-2xl border shadow-sm p-7"><div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold">✓</div><div className="mt-4 text-xl font-bold text-[#0A2A7A]">You qualify. Loom in 24h.</div><div className="mt-2 text-sm opacity-70">Serious lead — Loom + 3 leaks + fix plan + price. Invoice via US Bank (Grey) ACH/Wire — easy pay. Check email. Accra, Ghana - EST.</div></div>
}

return(
<div className="bg-white rounded-2xl border shadow-sm p-6">
<div className="flex justify-between"><span className="text-xs font-semibold tracking-widest bg-blue-50 text-[#0A2A7A] px-2.5 py-1 rounded-full">INBOX RADAR — QUALIFIED ONLY</span><span className="text-xs opacity-50">$500 value</span></div>
<div className="mt-4 text-xl font-bold text-[#0A2A7A]">Find Your 23% Revenue Leak.</div>
<div className="mt-2 text-sm opacity-70">For $1k-$100k+/mo ready to fix in 14 days. Fix from $750, retainer $1,500/mo.</div>

<form onSubmit={handleSubmit} className="mt-5 space-y-3">
<input required placeholder="Shopify URL (store.myshopify.com)" className="w-full border rounded-lg px-4 py-3 text-sm"/>
<input required type="email" placeholder="Work email" className="w-full border rounded-lg px-4 py-3 text-sm"/>
<select required value={budget} onChange={e=>setBudget(e.target.value)} className="w-full border rounded-lg px-4 py-3 text-sm bg-white">
<option value="">Budget to fix in next 14 days?</option>
<option value="500-750">$500 - $750 one-time — READY</option>
<option value="1500-2500">$1,500 - $2,500 growth — READY</option>
<option value="3000+">$3k+ retainer — READY</option>
<option value="no-budget">Just looking / No budget</option>
</select>
<select required value={timeline} onChange={e=>setTimeline(e.target.value)} className="w-full border rounded-lg px-4 py-3 text-sm bg-white">
<option value="">When to fix?</option>
<option value="asap">ASAP — losing now</option>
<option value="7days">In 7 days — READY</option>
<option value="30days">In 30 days</option>
<option value="just-looking">Just browsing</option>
</select>
<button className="w-full text-white font-bold py-3.5 rounded-lg text-sm bg-[#0A2A7A]">Apply for Inbox Radar Diagnostic</button>
<div className="text-xs text-center opacity-60 leading-4">
We only record Loom for qualified stores ready to invest.<br/>
💳 Pay easily: US Bank ACH/Wire via Grey + Wise + Payoneer + Stripe Invoice<br/>
No Ghana wire needed — you pay like a US vendor. Accra, Ghana - EST Hours.
</div>
</form>
</div>
)
}
