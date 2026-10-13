import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <header className="text-white py-4" style={{backgroundColor: '#0A2A7A'}}>
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="text-sm" style={{color: 'rgba(255,255,255,0.8)'}}>Back to Home</Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold" style={{color: '#0A2A7A'}}>Privacy Policy</h1>
        <p className="mt-2 text-sm opacity-60">Last updated: May 12, 2026 - NOVI LLC</p>
        <div className="mt-8 space-y-4 text-sm leading-7 break-words" style={{color: '#0A2A7A'}}>
          <p>NOVI LLC respects your privacy. We collect only store URL, email, and audit data needed to run Inbox Radar leak detection for Shopify stores.</p>
          <p>We do not sell your data. We use Klaviyo, Shopify, and Google APIs only to detect deliverability and SEO leaks. We do not share data with third parties for marketing.</p>
          <p>Data is stored securely. You can request deletion anytime by contacting info@novi-llc.com.</p>
          <p>Company: NOVI LLC - Accra, Ghana - Remote Worldwide - EST Hours - Contact: info@novi-llc.com - Phones: (+233) 243 87 6362, (+233) 536 20 7353, (+233) 268 47 9954</p>
          <p className="font-semibold">We accept US ACH Wire and Euro payments via Grey - easy payment for US and EU brands.</p>
        </div>
      </main>
    </div>
  )
}
