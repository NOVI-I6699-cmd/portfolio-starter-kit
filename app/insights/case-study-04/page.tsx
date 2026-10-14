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
          <h1 className="text-4xl font-bold mt-3 leading-tight" style={{color: '#0A2A7A'}}>
            The Back Button That Was Killing Warm Leads
          </h1>
          <p className="text-lg mt-3 opacity-70" style={{color: '#0A2A7A'}}>
            The $0 anchor fix that stops losing 60% of binge readers.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Problem</h2>
            <p className="mt-3 leading-7 text-[15px] opacity-80">In Novi, clicking Back from a case study dropped users to the top of the homepage. 60%+ of warm visitors never scroll back down to Insights. Warm lead lost.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold" style={{color: '#0A2A7A'}}>Result — Before / After Video</h2>
            <div className="mt-5 w-full rounded-2xl overflow-hidden border bg-black aspect-video">
              <iframe src="https://www.youtube.com/embed/HAxFw7L-T8Q" className="w-full h-full" style={{border: 0}} allowFullScreen title="Novi Before After Fix" />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Link href="/#case-studies" className="inline-block border px-6 py-3 rounded-full text-sm font-semibold" style={{borderColor: '#0A2A7A', color: '#0A2A7A'}}>
            ← Back to Case Studies Heading
          </Link>
        </div>
      </div>
    </div>
  );
}
