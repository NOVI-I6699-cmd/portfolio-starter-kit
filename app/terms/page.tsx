'use client'
import { useRouter } from 'next/navigation'

export default function Terms() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-white">
      <link rel="canonical" href="https://novi-llc.com/terms" />
      <header className="text-white py-4" style={{backgroundColor: '#0A2A7A'}}>
        <div className="max-w-4xl mx-auto px-6">
          <button 
            onClick={() => {
              if (window.history.length > 1) {
                router.back()
              } else {
                router.push('/')
              }
            }}
            className="text-sm hover:opacity-100 opacity-80"
            style={{color: 'rgba(255,255,255,0.8)'}}
          >
            ← Back
          </button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold" style={{color: '#0A2A7A'}}>Terms and Conditions</h1>
        <p className="mt-2 text-sm opacity-60">Last updated: May 12, 2026 - NOVI LLC</p>
        <div className="mt-8 space-y-4 text-sm leading-7 break-words" style={{color: '#0A2A7A'}}>
          <p>By using novi-llc.com you agree to our services for Shopify leak detection for stores doing 5k per month to 100k plus per month.</p>
          <p>Our audit service Inbox Radar finds deliverability, Klaviyo, and SEO leaks in 24 hours. Fixes delivered in 14 days. We do not guarantee specific revenue amounts. Results depend on store condition and client implementation.</p>
          <p>You agree to provide access to Shopify and Klaviyo when required for audit. You remain owner of your data.</p>
          <p>Payments via Grey - US ACH Wire and Euro. Contact: info@novi-llc.com - Accra, Ghana - Remote Worldwide - EST Hours.</p>
          <p className="font-semibold">We accept US ACH Wire and Euro payments via Grey - easy payment for US and EU brands.</p>
        </div>
      </main>
    </div>
  )
}
