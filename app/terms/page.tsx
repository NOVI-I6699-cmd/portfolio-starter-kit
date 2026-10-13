import Link from 'next/link'

export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="inline-flex items-center text-sm font-semibold text-[#0A2A7A] hover:underline mb-6">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-[#0A2A7A]">Terms and Conditions</h1>
      <p className="mt-2 text-sm opacity-60">Last updated: May 12, 2026 - NOVI LLC</p>
      <div className="mt-8 prose">
        <p>By using novi-llc.com you agree to our services for Shopify leak detection. Payments via Grey ACH Wire/Euro. Contact: info@novi-llc.com - Accra, Ghana.</p>
      </div>
    </main>
  )
}
