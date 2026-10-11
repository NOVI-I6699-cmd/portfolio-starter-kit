"use client";
import { useState } from "react";

export default function AuditForm() {
  const [store, setStore] = useState("");
  const [revenue, setRevenue] = useState("");
  const [goal, setGoal] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ store, revenue, goal, email }),
      });
      if (res.ok) setDone(true);
    } catch (err) {
      alert("Error");
    }
    setLoading(false);
  }

  if (done) {
    return (
      <div className="bg-gray-100 p-8 rounded-xl text-center">
        <h3 className="font-bold text-lg">Audit Request Sent!</h3>
        <p className="text-sm text-gray-600 mt-2">We will review {store} and reply within 24h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-gray-100 p-6 rounded-xl space-y-4">
      <input value={store} onChange={(e) => setStore(e.target.value)} placeholder="Shopify Store (e.g. yourstore.myshopify.com)" className="w-full p-3 rounded-lg border" required />
      <select value={revenue} onChange={(e) => setRevenue(e.target.value)} className="w-full p-3 rounded-lg border" required>
        <option value="">Monthly Revenue</option>
        <option>$5k - $20k/mo - Growth Stage</option>
        <option>$20k - $100k/mo - Scaling Stage</option>
        <option>$100k - $500k/mo - 7-Figure Path</option>
        <option>$500k+/mo - Enterprise / 8-Figures</option>
      </select>
      <select value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full p-3 rounded-lg border" required>
        <option value="">Your Goal / Reason</option>
        <option>Improving Conversion Rate</option>
        <option>Scaling to $100k+/mo</option>
        <option>Paid Ads Audit</option>
        <option>Store Redesign</option>
        <option>Other</option>
      </select>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Work Email" type="email" className="w-full p-3 rounded-lg border" required />
      <button disabled={loading} className="w-full bg-blue-900 text-white p-3 rounded-lg font-bold">{loading ? "Sending..." : "Get My Free Audit"}</button>
    </form>
  );
}
