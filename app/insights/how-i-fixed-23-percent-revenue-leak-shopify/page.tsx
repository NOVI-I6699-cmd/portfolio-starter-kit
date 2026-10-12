import Link from 'next/link'

export const metadata = {
  title: 'How I Fixed a 23% Revenue Leak for a Shopify Brand | NOVI LLC',
  description: 'Most Shopify brands doing $10k-$100k/mo lose 23% revenue to email deliverability. Here is how we fixed it in 72 hours.',
}

export default function Article() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/" className="text-sm hover:underline" style={{color:'#0A2A7A', opacity:0.6}}>← Back to NOVI LLC</Link>

      {/* FIXED: WAS GOLD #8B5E00 → NOW NOVI BLUE 60% */}
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold" style={{color:'#0A2A7A', opacity:0.6}}>INBOX RADAR - 01</p>

      <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight" style={{color:'#0A2A7A'}}>
        How I Fixed a 23% Revenue Leak for a Shopify Brand Doing $40k/mo
      </h1>

      <p className="mt-4 text-sm font-bold" style={{color:'#0A2A7A'}}>By Floran Dieudonnie - NOVI LLC</
