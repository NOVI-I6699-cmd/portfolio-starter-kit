'use client';
import { useState } from 'react';

export default function AuditForm() {
  const [email, setEmail] = useState('');
  const [store, setStore] = useState('');
  const [revenue, setRevenue] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!revenue) {
      alert('Please select your monthly revenue');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, store, revenue }),
      });
      if (res.ok) setDone(true);
      else alert('Failed - try again');
    } catch {
      alert('Failed - try again');
    }
    setLoading(false);
  };

  if (done) {
    return <div className="p-6 text-center font-bold">✅ Sent! Check inbox in 24h - Loom + 3 leaks.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        required
        placeholder="Work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-blue-900 rounded-xl px-4 py-3"
      />
      <input
        type="text"
        placeholder="Shopify URL. (store.myshopify.com)"
        value={store}
        onChange={(e) => setStore(e.target.value)}
        className="border border-blue-900 rounded-xl px-4 py-3"
      />
      
      <select
        required
        value={revenue}
        onChange={(e) => setRevenue(e.target.value)}
        className="border border-blue-900 rounded-xl px-4 py-3 bg-white"
      >
        <option value="">Monthly Revenue</option>
        <option value="$5k - $10k/mo - Early Start">$5k - $10k/mo — Early Start</option>
        <option value="$10k - $20k/mo - Growing">$10k - $20k/mo — Growing</option>
        <option value="$20k - $100k+/mo - Established">$20k - $100k+/mo — Established</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white rounded-xl py-4 font-semibold"
      >
        {loading ? 'Sending...' : 'Get My Free Diagnostic'}
      </button>
    </form>
  );
}
