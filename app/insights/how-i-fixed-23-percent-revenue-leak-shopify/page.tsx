import Link from 'next/link'
export default function Page(){
  return(
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/insights" className="text-sm text-[#0A2A7A]/60">Back</Link>
      <h1 className="mt-8 text-4xl font-bold text-[#0A2A7A]">How I Fixed 23% Revenue Leak on Shopify</h1>
      <p className="mt-4 font-bold text-[#0A2A7A]">By Floran Dieudonnie</p>
      <p className="mt-6 text-[#0A2A7A]/70">The 3-step framework.</p>
      <div className="mt-10 space-y-4">
        <div className="border rounded-xl p-3"><img src="/inbox-placement-proof.jpg" alt="Proof" className="w-full rounded-lg" /></div>
        <div className="border rounded-xl p-3"><img src="/revenue-chart-proof.jpg" alt="Revenue" className="w-full rounded-lg" /></div>
      </div>
    </main>
  )
}
