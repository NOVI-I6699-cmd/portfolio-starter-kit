import Link from 'next/link'
export default function Page(){
  return(
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/insights" className="text-sm text-[#0A2A7A]/60">Back</Link>
      <h1 className="mt-8 text-4xl font-bold text-[#0A2A7A]">Shopify SEO in 2026</h1>
      <p className="mt-4 font-bold text-[#0A2A7A]">By Floran Dieudonnie</p>
      <p className="mt-6 text-[#0A2A7A]/70">EEAT plus Core Web Vitals.</p>
      <div className="mt-8 space-y-2 text-[#0A2A7A]"><p><strong>1. EEAT</strong></p><p><strong>2. Schema</strong></p><p><strong>3. Speed</strong></p></div>
    </main>
  )
}
