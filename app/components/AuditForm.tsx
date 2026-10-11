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
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setSent(true);
      setStore(""); setRevenue(""); setEmail("");
      setTimeout(() => setSent(false), 6000);
    } catch (err: any) {
      alert("Failed: " + err.message);
      console.log(err);
    }
    setLoading(false);
  };

  const base = "w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10";
  const inputClass = base + " text-slate-900 placeholder:text-slate-400";
  let selectClass = base + " text-slate-400";
  if (revenue) {
    selectClass = base + " text-slate-900";
  }

  return (
    <div className="flex flex-col">
      {sent && (
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">✓</div>
          <div>
            <p className="font-semibold text-green-900 text-sm">Message sent successfully</p>
            <p className="text-xs text-green-700 mt-0.5">We received your details — we will be in touch shortly.</p>
          </div>
          <button onClick={() => setSent(false)} className="ml-auto text-green-400 hover:text-green-700">X</button>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input value={store} onChange={(e) => setStore(e.target.value)} placeholder="yourstore.myshopify.com" required className={inputClass} />
        <select value={revenue} onChange={(e) => setRevenue(e.target.value)} required className={selectClass}>
          <option value="" disabled hidden>Monthly revenue</option>
          <option value="$5k/mo">$5k/mo - Starting</option>
          <option value="$10k - $20k/mo">$10k - $20k/mo - Growing</option>
          <option value="$20k - $100k/mo">$20k - $100k/mo - Scaling</option>
          <option value="$100k+/mo">$100k+/mo - 7-figure</option>
        </select>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@brand.com" type="email" required className={inputClass} />
        <button disabled={loading} className="bg-[#0A2A7A] text-white rounded-xl py-3.5 text-sm font-bold disabled:opacity-60">
          {loading ? "Sending..." : "Get My Free Audit"}
        </button>
      </form>
    </div>
  );
}
