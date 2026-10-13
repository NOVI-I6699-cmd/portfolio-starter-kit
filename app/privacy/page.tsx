import Link from 'next/link'

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="inline-flex items-center text-sm font-semibold text-[#0A2A7A] hover:underline mb-6">
        ← Back to Home
      </Link>
      <h1 className="text-4xl font-bold text-[#0A2A7A]">Privacy Policy</h1>
      <p className="mt-2 text-sm opacity-60">Last updated: May 12, 2026 - NOVI LLC</p>
      <div className="mt-8 prose">
        <p>NOVI LLC operates from Accra, Ghana - Remote Worldwide (EST Hours). Contact: info@novi-llc.com</p>
        <p className="mt-4">We collect audit form data only to deliver your Inbox Radar. We never sell data. We accept US ACH Wire and Euro via Grey.</p>
      </div>
    </main>
  )
}
