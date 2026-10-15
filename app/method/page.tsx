import Link from 'next/link'
export default function Page(){
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
      <Link href="/#case-studies" className="text-sm text-[#0A2A7A]/60 hover:text-[#0A2A7A]">← Back to Case Studies</Link>
      <p className="mt-8 text-xs tracking-widest uppercase font-semibold text-[#0A2A7A]/60">METHOD - 05</p>

      {/* FINAL UNIFIED H1 - matches Case 01 perfect fix */}
      <h1 className="font-serif mt-3 text-[26px] leading-[1.15] tracking-[-0.02em] md:text-[36px] md:leading-[1.1] font-bold [text-wrap:balance] max-w-[20ch] md:max-w-[28ch] text-[#0A2A7A]">Mockup First. Then We Talk About Price.</h1>

      <p className="mt-4 text-sm font-bold text-[#0A2A7A]">By Floran Dieudonnie - NOVI LLC</p>
      <p className="mt-1 text-xs text-[#0A2A7A]/60">Shopify Agency | E-commerce Growth and Brand Strategy - 3 min read</p>
      <p className="mt-6 text-lg leading-relaxed text-[#0A2A7A]/70">We show a mockup before we send a quote. Most agencies think that's a mistake.</p>

      <div className="mt-10 space-y-10 text-[15.5px] leading-7 text-[#0A2A7A]/90">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#0A2A7A]">The Usual Process</h2>
          <p className="mt-3 opacity-80">Discovery call, proposal, negotiation, advance, then design. The client pays before they've seen a single screen.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-[#0A2A7A]">Our Flipped Process</h2>
          <p className="mt-3 opacity-80">After the first call we send a homepage mockup built for your brand, usually in two or three days. Then we talk about price.</p>
          <div className="mt-4 border border-[#0A2A7A]/10 rounded-2xl p-6 bg-[#0A2A7A]/5">
            <p className="text-sm font-bold text-[#0A2A7A]">What you get in 48h</p>
            <div className="mt-3 space-y-1 text-sm opacity-80">
              <p>1 hero + 1 product section with your logo, colors, real product</p>
              <p>Figma screenshot, not full site — watermarked NOVI Concept</p>
              <p>No charge. If you love it, we talk scope and price.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-[#0A2A7A]">What We Get In Return</h2>
          <ul className="mt-3 space-y-3 opacity-80 list-disc pl-5">
            <li><strong>Clients argue about the design, not the invoice.</strong></li>
            <li><strong>Scope becomes obvious</strong> because they can see what they're asking for.</li>
            <li><strong>Trust is built by the work, not by deck.</strong></li>
          </ul>
          <p className="mt-4 opacity-80">Yes, some people take the mockup and walk away. That's fine. A founder who's been burned by an agency before doesn't want another promise. They want proof.</p>
        </div>

        <div className="border border-[#0A2A7A]/10 rounded-2xl p-6 bg-white">
          <p className="text-sm font-bold text-[#0A2A7A]">The Design Does The Selling</p>
          <p className="mt-2 text-sm opacity-80">This is why our Case Studies hit — Case 01 $40k/mo leak, Case 02 92% inbox, Case 04 $0 back-button fix. We show, we don't tell.</p>
        </div>
      </div>

      <Link href="/#case-studies" className="mt-12 inline-flex border px-6 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition" style={{borderColor: '#0A2A7A', color: '#0A2A7A'}}>
        ← Back to Case Studies Heading
      </Link>
    </main>
  )
}
