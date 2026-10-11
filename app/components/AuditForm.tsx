"use client";
import { useState } from "react";

export default function AuditForm() {
  const [store, setStore] = useState("");
  const [revenue, setRevenue] = useState(""); // <-- THIS is what was missing, makes it show "Monthly revenue"
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ store, revenue, email }),
      });
    } catch (err) {
      console.log(err);
    }
    const text = `NEW LEAD novi-llc.com%0AStore: ${store}%0ARevenue: ${revenue}%0AEmail: ${email}`;
    window.location.href = `https://wa.me/233243876362?text=${text}`;
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        value={store}
        onChange={(e) => setStore(e.target.value)}
        placeholder="yourstore.myshopify.com"
        required
        className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-sm"
      />

      <select
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
        required
        className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-sm"
      >
        <option value="" disabled hidden>Monthly revenue</option>
        <option value="$5k/mo">$5k/mo — Starting</option>
        <option value="$10k - $20k/mo">$10k - $20k/mo — Growing</option>
        <option value="$20k - $100k/mo">$20k - $100k/mo — Scaling</option>
        <option value="$100k+/mo">$100k+/mo — 7-figure</option>
      </select>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@brand.com"
        type="email"
        required
        className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-sm"
      />

      <button disabled={loading} className="bg-black text-white rounded-lg py-3 text-sm">
        {loading ? "Sending..." : "Get My Free Audit"}
      </button>
    </form>
  );
}
