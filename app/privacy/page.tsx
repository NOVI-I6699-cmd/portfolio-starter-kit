import Link from 'next/link'

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-[#0A2A7A] hover:underline mb-8">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-[#0A2A7A]">Privacy Policy</h1>
        <p className="mt-3 text-sm font-semibold text-slate-500">Last updated: May 12, 2026 - NOVI LLC</p>

        <div className="mt-8 space-y-4 text-[15px] leading-7 text-slate-800">
          <p><span className="font-bold">NOVI LLC</span> operates from Accra, Ghana - Remote Worldwide (EST Hours). Contact: <span className="font-semibold">info@novi-llc.com</span></p>
          <p>We collect only the data you submit in the audit form (Shopify URL, email, monthly revenue) to deliver your Inbox Radar report. We never sell, share or rent your data.</p>
          <p>We use secure tools (Vercel, Klaviyo, Resend) to process audits. You can request deletion anytime by emailing info@novi-llc.com.</p>
          <p className="font-semibold text-[#0A2A7A]">Payments: We accept US ACH Wire and Euro payments via Grey - easy payment for US and EU brands.</p>
          <p className="text-sm text-slate-500 mt-8">© 2026 NOVI LLC - All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
