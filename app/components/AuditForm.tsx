"use client";
import { useState } from "react";

export default function AuditForm() {
  const [store, setStore] = useState("");
  const [revenue, setRevenue] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ store, revenue, goal, email }),
      });
      
      const text = await res.text();
      let data: any = {};
      try { 
        data = JSON.parse(text); 
      } catch {
        throw new Error("API route not found - /api/subscribe returned HTML. Preview: " + text.slice(0,120));
      }
      
      if (!res.ok) throw new Error(data.error || "Failed");
      setSent(true);
      setStore(""); setRevenue(""); setGoal(""); setEmail("");
      setTimeout(()=>setSent(false),6000);
    } catch (err:any) {
      alert("Failed: "+err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputBase = "w-full bg-[#F3F4F6] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10";
  
  return (
    <div className="flex flex-col">
      {sent && (
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">✓</div>
          <div><p className="font-semibold text-green-900 text-sm">Message sent successfully</p><p className="text-xs text-green-700">We received your details</p></div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
          value={store} 
          onChange={e=>setStore(e.target.value)} 
          placeholder="yourstore.myshopify.com" 
          required 
          className={`${inputBase} text-slate-900 placeholder:text-slate-500`} 
        />
        <select 
          value={revenue} 
          onChange={e=>setRevenue(e.target.value)} 
          required 
          className={`${inputBase} ${revenue ? 'text-slate-900' : 'text-slate-500'}`}
        >
          <option value="" disabled>Monthly revenue</option>
          <option value="$5k/mo - Starting" className="text-slate-900">$5k/mo - Starting</option>
          <option value="$10k - $20k/mo - Growth" className="text-slate-900">$10k - $20k/mo - Growth</option>
          <option value="$20k - $100k/mo - Scaling" className="text-slate-900">$20k - $100k
