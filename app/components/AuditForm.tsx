"use client";
import { useState } from "react";

export default function AuditForm() {
  const [store, setStore] = useState("");
  const [revenue, setRevenue] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const base = "w-full p-3 rounded-lg border border-[#0A2A7A]/20 bg-white text-[15px] text-[#0A2A7A] placeholder:text-[#9CA3AF] focus:border-[#0A2A7A] focus:outline-none";
  const sel = (v: string) => v === ""? "text-[#9CA3AF]" : "text-[#0A2A7A]";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ store, revenue, goal, email }),
    });
    setLoading(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="bg-[#0A2A7A] p-1.5 rounded-xl">
        <div className="bg-white p-8 rounded-[10px] text-center">
          <div className="text-[32px] mb-3">🎉</div>
          <h3 className="font-bold text-[18px] text-[#0A2A7A]">Audit Request Received</h3>
          <p className="text-[14px] text-[#0A2A7A]/70 mt-3 leading-relaxed">
            Thank you for your submission.<br/>Our team will review your request and be in touch shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl space-y-4 border">
      <input value={store} onChange={e=>setStore(e.target.value)} placeholder="Shopify Store (brand.com)" className={base} required />
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@brand.com" type="email" className={base} required />

      {/* REVENUE - REQUIRED - $5k+ only */}
      <select value={revenue} onChange={e=>setRevenue(e.target.value)} className={`${base} ${sel(revenue)}`} required>
        <option value="">Monthly Revenue *</option>
        <option>$5
