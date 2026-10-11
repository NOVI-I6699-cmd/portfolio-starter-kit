"use client";
import { useState } from "react";

export default function AuditForm() {
  const [store, setStore] = useState("");
  const [revenue, setRevenue] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const base = "w-full p-3 rounded-lg border border-[#0A2A7A]/20 bg-white text-[15px] placeholder:text-[#9CA3AF] focus:border-[#0A2A7A] focus:ring-1 focus:ring-[#0A2A7A] focus:outline-none";
  const selectColor = (v: string) => (v === ""? "text-[#9CA3AF]" : "text-[#0A2A7A]");

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
  }

  // PROFESSIONAL SUCCESS - AGENCY LEVEL
  if (done) {
    return (
      <div className="bg-[#0A2A7A] p-1.5 rounded-xl">
        <div className="bg-white p-8 rounded-[10px] text-center">
          <div className="text-[32px] mb-3">🎉</div>
          <h3 className="font-bold text-[18px] text-[#0A2A7A]">Audit Request Received</h3>
          <p className="text-[14px] text-[#0A2A7A]/70 mt-3 leading-relaxed">
            Thank you for your submission.<br/>
            Our team will review your request and be in touch shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-xl space-y-4 border border-gray-200">
      <input value={store} onChange={(e) => setStore(e.target.value)} placeholder="Shopify Store (e.g. yourstore.myshopify.com)" className={`${base} text-[#0A2A7A]`} required />
      <select value={revenue} onChange={(e) => setRevenue(e.target.value)} className={`${base} ${selectColor(revenue)}`} required>
        <option value="">Monthly Revenue</option>
        <option>$5k - $20k/mo - Growth Stage</option>
        <option>$20k - $100k/mo - Scaling Stage</option>
        <option>$100k - $500k/mo - 7-Figure Path</option>
        <option>$500k+/mo - Enterprise / 8-Figures</option>
      </select>
      <select value={goal} onChange={(e) => setGoal(e.target.value)} className={`${base} ${selectColor(goal)}`} required>
        <option value="">Your Goal / Reason</option>
        <option>Improving Conversion Rate</option>
        <option>Scaling to $100k+/mo</option>
        <option>Paid Ads Audit</option>
        <option>Store Redesign</option>
        <option>Other</option>
      </select>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@brand.com" type="email" className={`${base} text-[#0A2A7A]`} required />
      <button disabled={loading} className="w-full bg-[#0A2A7A] text-white p-3 rounded-lg font-bold">
        {loading? "Sending..." : "Get My Free Audit"}
      </button>
    </form>
  );
}
