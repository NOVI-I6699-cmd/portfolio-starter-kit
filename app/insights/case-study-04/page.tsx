import Link from "next/link";

export default function CaseStudy04() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/#case-studies" className="text-sm font-medium hover:underline" style={{color: '#0A2A7A'}}>
          ← Back to Insights
        </Link>

        <div className="mt-10">
          <p className="text-xs tracking-[0.2em] font-bold opacity-50" style={{color: '#0A2A7A'}}>CASE STUDY 04 — CRO / UX</p>
          <h1 className="text-4xl md:text-[42px] font-bold mt-3 leading-tight" style={{color: '#0A2A7A'}}>
            The Back Button That Was Killing Warm Leads
          </h1>
          <p className="text-lg mt-3 opacity-70" style={{color: '#0A2A7A'}}>
            The $0 anchor fix that stops losing 60% of binge readers.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Problem</h2>
            <p className="mt-3 leading-7 text-[15px] opacity-80">
              In Novi, clicking Back from a case study dropped users to the top of the homepage.
              60%+ of warm visitors never scroll back down to Insights. Warm lead lost.
              Same leak exists on 90% of Shopify stores: Collection → Product → Back to top.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Diagnosis</h2>
            <div className="mt-3 bg-zinc-900 text-white rounded-xl p-4 text-sm font-mono">
              <div>Before: href=&quot;/&quot; → jumps to top</div>
              <div className="mt-2 text-green-400">After: href=&quot;/#case-studies&quot; + id=&quot;case-studies&quot;</div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Fix</h2>
            <ul className="mt-3 list-disc ml-5 text-[15px] leading-7 opacity-80">
              <li>Change Back link to /#case-studies</li>
              <li>Add id=&quot;case-studies&quot; to Insights section on homepage</li>
              <li>No extra JS — browser handles it</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Result — Before / After Video</h2>
            <p className="mt-2 text-sm opacity-70">Red = Before (jumps to top). Green = After (stays on Insights).</p>

            <div className="mt-5 w-full rounded-2xl overflow-hidden border bg-black aspect-video">
              <iframe
                src="https://www.youtube.com/embed/HAxFw7L-T8Q"
                className="w-full h-full"
                style={{border: 0}}
                allowFullScreen
                title="Novi Before After Fix"
              />
            </div>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Client Lesson</h2>
            <p className="mt-3 leading-7 text-[15px] opacity-80">
              We audit this Scroll Reset Leak on every store. Small UX bug, big revenue impact.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/#case-studies" className="inline-block border px-6 py-3 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition" style={{borderColor: '#0A2A7A', color: '#0A2A7A'}}>
            View All Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}
