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
            <p className="text-xs text-green-700 mt-0.5
