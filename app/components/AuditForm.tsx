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
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ store, revenue, email }),
      });
      if (res.ok) {
        setSent(true);
        setStore(""); setRevenue(""); setEmail("");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const inputStyle = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0A2A7A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A2A7A]/10 focus:border-[#0A2A7A]/20";

  if (sent) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
        <div className="text-lg font-bold text-[#0A2A7A]">✅ Request Sent!</div>
        <div className="mt-2 text-sm text-[#0A2A7A]/70">We got it at info@novi-llc.com. We'll reply in 24h.</div>
        <button onClick={() => setSent(false)} className="mt-4 text-sm underline text-[#0A2A7A]">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input value={store} onChange={(e) => setStore(e.target.value)} placeholder="yourstore.myshopify.com" required className={inputStyle} />
      <select value={revenue} onChange={(e) => setRevenue(e.target.value)} required className={`${inputStyle} ${revenue === "" ? "text-slate-400" : "text-[#0A2A7A]"}`}>
        <option value="" disabled hidden>Monthly revenue</option>
        <option value="$5k/mo">$5k/mo — Starting</option>
        <option value="$10k - $20k/mo">$10k - $20k/mo — Growing</option>
        <option value="$20k - $100k/mo">$
