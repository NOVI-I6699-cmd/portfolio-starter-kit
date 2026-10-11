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
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ store, revenue, email }),
      });
      setSent(true);
      setStore("");
      setRevenue("");
      setEmail("");
      setTimeout(() => setSent(false), 6000);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const base = "w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10";
  const inputClass = base + " text-slate-900 placeholder:text-slate-400";
  const selectClass = revenue? base + " text-slate-900" : base + " text-slate-400";

  return (
    <div className="flex flex-col">
      {sent && (
        <div className="mb-5 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500">
            <span>🔔</span>
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-green-900">Message sent successfully</p>
            <p className="mt-0.5 text-[13px] text-green-700">We received your details — we will be in touch shortly.</p>
          </div>
          <button onClick={() => setSent(false)} className="ml-auto text-green-400 hover:text-green-600 text-lg">✕</button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input value={store} onChange={(e) => setStore(e.target.value)} placeholder
