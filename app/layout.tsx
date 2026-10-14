import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './global.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair', 
  weight: ['400','500'] 
})
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400','500','700'] 
})

export const metadata: Metadata = {
  title: 'Novi LLC — Shopify Agency | E-commerce Growth & Brand Strategy | Accra Ghana',
  description: 'Novi LLC is a Shopify Growth Agency based in Accra, Ghana - Remote Worldwide - EST Hours. We help Shopify stores doing $5k to $100k+ per month recover 23% revenue. Not affiliated with NOVI Space Inc aerospace company.',
  verification: {
    other: {
      'impact-site-verification': '9341737b-0d24-48a9-aee6-0550c60cb08e',
    },
  },
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://novi-llc.com/#organization",
  "name": "Novi LLC",
  "alternateName": "NOVI - Shopify Growth Agency",
  "url": "https://novi-llc.com",
  "logo": "https://novi-llc.com/logo.png",
  "description": "Shopify Agency | E-commerce Growth and Brand Strategy. Serving Shopify stores from $5k+ to $100k+ per month. Accra, Ghana - Remote Worldwide - EST Hours.",
  "founder": {
    "@type": "Person",
    "name": "Floran Dieudonnie",
    "image": "https://novi-llc.com/founder-floran-dieudonnie-novi-llc.jpg",
    "sameAs": "https://www.linkedin.com/in/floran-novi-llc/"
  },
  "telephone": "+233243876362",
  "email": "info@novi-llc.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Accra",
    "addressCountry": "GH"
  },
  "sameAs": [
    "https://www.linkedin.com/in/floran-novi-llc/",
    "https://x.com/novi_llc",
    "https://wa.me/233243876362"
  ],
  "knowsAbout": ["Shopify", "E-commerce Growth", "Shopify CRO", "Klaviyo", "Shopify SEO"],
  "disambiguatingDescription": "Not affiliated with NOVI Space, Inc. aerospace company in Arlington, Virginia. Novi LLC is a Shopify e-commerce growth agency based in Accra, Ghana."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-[#0A2A7A] font-[var(--font-inter)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
