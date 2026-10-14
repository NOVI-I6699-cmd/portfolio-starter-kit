import Link from "next/link";

export default function CaseStudy04() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* TOP - NOW MATCHES CASE 01 / 02 / 03 - FADED UNTIL HOVER */}
        <Link href="/#case-studies" className="text-sm text-[#0A2A7A]/60 hover:text-[#0A2A7A] transition-colors">
          ← Back to Case Studies Heading
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
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Diagnosis</h2>
            <div className="mt-3 bg-zinc-900 text-white rounded-xl p-4 text-sm font-mono leading-6">
              <div>Before: <span className="text-red-400">href="/"</span> → browser resets to top</div>
              <div className="mt-2">After: <span className="text-green-400">href="/#case-studies" + id="case-studies"</span> → stays on Insights</div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>The $0 Fix — 2 Minutes</h2>
            <ul className="mt-3 list-disc ml-5 text-[15px] leading-7 opacity-80">
              <li>Homepage Insights: add <code>id="case-studies" className="scroll-mt-20"</code></li>
              <li>Case pages: change Back link from <code>/</code> to <code>/#case-studies</code></li>
              <li>No JavaScript. Works on Shopify + Next.js.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Result — Before / After Video</h2>
            <div className="mt-5 w-full rounded-2xl overflow-hidden border bg-black aspect-video shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/QlnEkkfvGu4"
                className="w-full h-full"
                style={{border: 0}}
                allowFullScreen
                title="Novi LLC - Before After Fix"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM - WHITE PILL YOU LIKED */}
        <div className="mt-12">
          <Link href="/#case-studies" className="inline-flex self-start border px-6 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition" style={{borderColor: '#0A2A7A', color: '#0A2A7A'}}>
            ← Back to Case Studies Heading
          </Link>
        </div>
      </div>
    </div>
  );
}
