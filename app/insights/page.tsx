import Link from 'next/link'
export default function Insights(){
  return(
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <h1 className="text-4xl font-bold text-[#0A2A7A]">Insights</h1>
      <div className="mt-10 space-y-4">
        <Link href="/insights/how-i-fixed-23-percent-revenue-leak-shopify" className="block border rounded-xl p-4 font-bold text-[#0A2A7A]">Case 01: 23% Revenue Leak</Link>
        <Link href="/insights/from-spam-to-inbox-72h" className="block border rounded-xl p-4 font-bold text-[#0A2A7A]">Case 02: Spam to Inbox 72h</Link>
        <Link href="/insights/shopify-seo-2026" className="block border rounded-xl p-4 font-bold text-[#0A2A7A]">Strategy: Shopify SEO 2026</Link>
      </div>
    </main>
  )
}
