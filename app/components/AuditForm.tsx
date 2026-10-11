"use client";
import { useState } from "react";

export default function AuditForm() {
  const [store, setStore] = useState("");
  const [revenue, setRevenue] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const base = "w-full p-3 rounded-lg border border-[#0A2A7A]/20 bg-[#FFFFFF] placeholder:text-[#0A2A7A]/50 text-[15px] focus:outline-none focus:border-[#0A2A7A] focus:ring-2 focus:ring-[#0A2A7A]/20";
  const selectColor = (val: string) => val === ""? "text-[#0A2A7A]/50" : "text-[#0A2A7A]";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ store, revenue, goal, email }),
    });
    setLoading(false);
    if (res.ok) setDone(true);
    else alert("Error");
  }

  if (done) {
    return (
      <div className="bg-[#0A2A7A] p-6 rounded-xl text-center">
        <div className="bg-[#FFFFFF] p-8 rounded-lg">
          <h3 className="font-bold text-lg text-[#0A2A7A]">Audit Request Sent!</h3>
          <p className="text-sm text-[#0A2A7A]/80 mt-2">We will review {store} and reply within 24h.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-[#FFFFFF] p-6 rounded-xl space-y-4 border border-[#0A2A7A]/10 shadow-sm">
      <input value={store} onChange={(e)=>setStore(e.target.value)} placeholder="Shopify Store (e.g. yourstore.myshopify.com)" className={`${base} text-[#0A2A7A]`} required />

      <select value={revenue} onChange={(e)=>setRevenue(e.target.value)} className={`${base} ${selectColor(revenue)}`} required>
        <option value="">Monthly Revenue</option>
        <option>$5k - $20k/mo - Growth Stage</option>
        <option>$20k - $100k/mo - Scaling Stage</option>
        <option>$100k - $500k/mo - 7-Figure Path</option>
        <option>$500k+/mo - Enterprise / 8-Figures</option>
      </select>

      <select value={goal} onChange={(e)=>setGoal(e.target.value)} className={`${base} ${selectColor(goal)}`} required>
        <option value="">Your Goal / Reason</option>
        <option>Improving Conversion Rate</option>
        <option>Scaling to $100k+/mo</option>
        <option>Paid Ads Audit</option>
        <option>Store Redesign</option>
        <option>Other</option>
      </select>

      <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@brand.com" type="email" className={`${base} text-[#0A2A7A]`} required />

      <button disabled={loading} className="w-full bg-[#0A2A7A] text-[#FFFFFF] p-3 rounded-lg font-bold hover:bg-[#0A2A7A]/90 transition">
        {loading? "Sending..." : "Get My Free Audit"}
      </button>
    </form>
  );
}
