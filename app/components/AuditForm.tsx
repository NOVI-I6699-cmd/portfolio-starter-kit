"use client";
import { useState } from "react";

export default function AuditForm() {
  const [store, setStore] = useState("");
  const [revenue, setRevenue] = useState("");
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
        body: JSON.stringify({ store, revenue, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setSent(true);
      setStore(""); setRevenue(""); setEmail("");
      setTimeout(()=>setSent(false),6000);
    } catch (err:any) {
      alert("Failed: "+err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      {sent && (
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">✓</div>
          <div><p className="font-semibold text-green-900 text-sm">Message sent successfully</p><p className="text-xs text-green-700">We received your details</p></div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input value={store} onChange={e=>setStore(e.target.value)} placeholder="yourstore.myshopify.com" required className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900" />
        
        <select value={revenue} onChange={e=>setRevenue(e.target.value)} required className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900">
          <option value="" disabled>Monthly revenue</option>
          <option value="$5k/mo - Starting">$5k/mo - Starting</option>
          <option value="$10k - $20k/mo - Growth">$10k - $20k/mo - Growth</option>
          <option value="$20k - $100k/mo - Scaling">$20k - $100k/mo - Scaling</option>
          <option value="$100k+/mo - Enterprise">$100k+/mo - Enterprise</option>
        </select>

        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@brand.com" type="email" required className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900" />
        <button disabled={loading} className="bg-[#0A2A7A] text-white rounded-xl py-3.5 text-sm font-bold">{loading ? "Sending..." : "Get My Free Audit"}</button>
      </form>
    </div>
  );
}
