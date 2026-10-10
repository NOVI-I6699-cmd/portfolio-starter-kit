'use client';
import { useState } from 'react';

const options = [
  { value: '$10/mo - $1k/mo', label: '$230/mo lost' },
  { value: '$1k - $10k/mo', label: '$1,150/mo lost' },
  { value: '$10k - $100k/mo', label: '$4,600/mo lost' },
];

export default function AuditForm() {
  const [email][setEmail] = useState('');
  const [store][setStore] = useState('');
  const [revenue][setRevenue] = useState('');
  const [loading][setLoading] = useState(false);
  const [done][setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!revenue) {
      alert('Please select your revenue');
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
    } catch {}
    setLoading(false);
  };

  if (done) {
    return <div className="p-6 text-center font-bold">✅ Sent! You'll get Loom + 3 leaks in 24h.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-2 flex-wrap">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setRevenue(opt.value)}
            className={`px-4 py-2 rounded-full border text-sm font-medium ${
              revenue === opt.value? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-blue-900 border-blue-900'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

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

      <button type="submit" disabled={loading} className="bg-black text-white rounded-xl py-4 font-semibold">
        {loading? 'Sending...' : 'Get My Free Diagnostic'}
      </button>
    </form>
  );
}
