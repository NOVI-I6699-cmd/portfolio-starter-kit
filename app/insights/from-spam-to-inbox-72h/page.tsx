import Link from 'next/link'
export default function Page(){
  return(
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/insights" className="text-sm text-[#0A2A7A]/60">Back</Link>
      <h1 className="mt-8 text-4xl font-bold text-[#0A2A7A]">From Spam to Inbox in 72h</h1>
      <p className="mt-4 font-bold text-[#0A2A7A]">By Floran Dieudonnie</p>
      <p className="mt-6 text-[#0A2A7A]/70">40% spam to 92% inbox in 3 days.</p>
      <div className="mt-10 space-y-4">
        <div className="border rounded-xl p-3"><img src="/gmail-primary-proof.jpg" alt="Gmail" className="w-full rounded-lg" /></div>
        <div className="border rounded-xl p-3"><img src="/inbox-radar-dashboard.jpg" alt="Radar" className="w-full rounded-lg" /></div>
        <div className="border rounded-xl p-3"><img src="/cart-email-proof.jpg" alt="Cart" className="w-full rounded-lg" /></div>
      </div>
    </main>
  )
}
