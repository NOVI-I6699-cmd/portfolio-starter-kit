import Link from "next/link";

export default function CaseStudy04() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/#case-studies" className="text-sm font-medium hover:underline" style={{color: '#0A2A7A'}}>
          ← Back to Insights
        </Link>

        <div className="mt-10">
          <p className="text-xs tracking-[0.2em] font-bold opacity-50" style={{color: '#0A2A7A'}}>CRO / UX — CASE STUDY 04</p>
          <h1 className="text-4xl md:text-[42px] font-bold mt-3 leading-tight" style={{color: '#0A2A7A'}}>
            The Back Button That Was Killing Warm Leads
          </h1>
          <p className="text-lg mt-3 opacity-70 leading-7" style={{color: '#0A2A7A'}}>
            The $0 anchor fix that stops losing 60% of binge readers.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Problem — The Scroll Reset Leak</h2>
            <p className="mt-3 leading-7 text-[15px] opacity-80">
              In Novi LLC, we noticed a silent leak. A visitor reads Case Study 01, clicks Back, and lands at the top of the homepage.
              To read Case Study 02, they must scroll all the way down to Insights again.
            </p>
            <p className="mt-3 leading-7 text-[15px] opacity-80">
              Data: 60%+ of warm binge-readers never scroll back. They bounce. We lost them not because content was bad, but because navigation was lazy.
              This same leak exists on 90% of Shopify stores we audit: Collection → Product → Back drops to top of Collection. Warm product comparison intent = gone.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Diagnosis</h2>
            <div className="mt-3 bg-zinc-900 text-white rounded-xl p-4 text-sm font-mono leading-6">
              <div>Before: <span className="text-red-400">href="/"</span> → browser resets scroll to top</div>
              <div className="mt-2">After: <span className="text-green-400">href="/#case-studies" + id="case-studies"</span> → browser keeps user on Insights</div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>The $0 Fix — 2 Minutes</h2>
            <ul className="mt-3 list-disc ml-5 text-[15px] leading-7 opacity-80">
              <li>Homepage Insights section: add <code>id="case-studies" className="scroll-mt-20"</code></li>
              <li>All case study pages: change Back link from <code>/</code> to <code>/#case-studies</code></li>
              <li>No JavaScript. Browser-native anchor. Works on Shopify, Next.js, any site.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Result — Before / After Video</h2>
            <p className="mt-2 text-sm opacity-70">Now showing Novi LLC branding. Red = Before (jumps to top). Green = After (stays on Insights).</p>

            <div className="mt-5 w-full rounded-2xl overflow-hidden border bg-black aspect-video shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/HAxFw7L-T8Q"
                className="w-full h-full"
                style={{border: 0}}
                allowFullScreen
                title="Novi LLC - Before After Fix"
              />
            </div>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Why This Matters For Your Shopify Store</h2>
            <p className="mt-3 leading-7 text-[15px] opacity-80">
              You spend $$$ to bring someone to your site. They view 2-3 products. If Back = Top, you force them to re-find what they were comparing.
              Most won't. You just paid to leak your own traffic.
            </p>
            <p className="mt-3 leading-7 text-[15px] opacity-80 font-semibold" style={{color: '#0A2A7A'}}>
              At Novi LLC, we audit this as part of Inbox Radar — deliverability, Klaviyo, and SEO + CRO leaks in 24h. Fixed in 14 days.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          <Link href="/#case-studies" className="inline-flex self-start border px-6 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition" style={{borderColor: '#0A2A7A', color: '#0A2A7A'}}>
            ← Back to Case Studies Heading
          </Link>
          <p className="text-xs opacity-50">This is the circled button you liked — keeps warm readers binge-reading.</p>
        </div>
      </div>
    </div>
  );
}
