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
  title: 'Novi LLC — Shopify Agency | E-commerce Growth & Brand Strategy',
  description: 'I help US Shopify brands doing $10k/mo recover 30% revenue with email. Async Loom teardown in 24h.',
  verification: {
    other: {
      'impact-site-verification': '9341737b-0d24-48a9-aee6-0550c60cb08e',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-[#0A2A7A] font-[var(--font-inter)] antialiased">
        {children}
      </body>
    </html>
  )
}
