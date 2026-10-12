import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sm text-[#0A2A7A]/60 hover:text-[#0A2A7A] hover:underline">
          ← Back to NOVI LLC
        </Link>

        {/* Header */}
        <p className="mt-10 text-xs tracking-[0.2em] uppercase font-bold text-[#8B5E00]">
          CASE STUDY - 02
        </p>
        <h1 className="mt-3 text-4xl md:text-[42px] font-bold leading-[1.1] tracking-tight text-[#0A2A7A]">
          From Spam to Inbox in 72h - Full in 14 Days
        </h1>

        {/* AUTHOR BLOCK - VISIBLE */}
        <div className="mt-6 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#0A2A7A] text-white flex items-center justify-center text-xs font-bold">
            FD
          </div>
          <div>
            <p className="text-sm font-bold text-[#0A2A7A] leading-none">
              By Floran Dieudonnie - NOVI LLC
            </p>
            <p className="mt-1.5 text-xs text-[#0A2A7A]/50">
              Shopify Agency | E-commerce Growth & Brand Strategy • 5 min read
            </p>
          </div>
        </div>

        <p className="mt-6 text-lg leading-8 text-[#0A2A7A]/70">
          How we took a Shopify brand from 40% spam to 92% inbox in 3 days, and fully recovered 23% revenue in 14 days.
        </p>

        {/* Content */}
        <div className="mt-12 space-y-10 text-[15px] leading-7 text-[#0A2A7A]/80">

          <section>
            <h2 className="font-bold text-[#0A2A7A] text-[16px]">Day 1-2: Diagnosis</h2>
            <p className="mt-2">
              SPF fail, DKIM fail, DMARC none. 38% dead list. 12k contacts never engaged. Klaviyo sending to spam trap.
              Fixed DNS at Cloudflare, cleaned list with 2-step validation, suppressed 38% of list.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-[#0A2A7A] text-[16px]">Day 3: Quick Win - 92% Inbox</h2>
            <p className="mt-2">
              First sales from spam folder recovered. How? Proper SPF <code>include:send.klaviyo.com</code>, 1024-bit DKIM,
              DMARC
