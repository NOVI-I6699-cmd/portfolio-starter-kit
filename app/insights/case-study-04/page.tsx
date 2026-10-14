import Link from "next/link";

export default function CaseStudy04() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/#case-studies" className="text-sm opacity-60 hover:opacity-100">
        ← Back to Insights
      </Link>

      <div className="mt-8">
        <p className="text-sm tracking-widest opacity-50">CASE STUDY 04 — CRO / UX</p>
        <h1 className="text-4xl font-bold mt-4 leading-tight">
          The Back Button That Was Killing Warm Leads
        </h1>
        <p className="text-xl opacity-70 mt-4">
          The $0 anchor fix that stops losing 60% of binge readers.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold">Problem</h2>
          <p className="mt-3 leading-relaxed opacity-80">
            In Novi, clicking Back from a case study dropped users to the top of the homepage.
            60%+ of warm visitors never scroll back down to Insights. Warm lead lost.
            Same leak exists on 90% of Shopify stores: Collection → Product → Back to top.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Diagnosis</h2>
          <div className="mt-3 font-mono text-sm bg-zinc-900 text-white p-4 rounded-lg">
            <div>Before: href=&quot;/&quot;</div>
            <div className="mt-2 text-green-400">After: href=&quot;/#case-studies&quot; + id=&quot;case-studies&quot;</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Fix</h2>
          <ul className="mt-3 list-disc ml-6 space-y-2 opacity-80">
            <li>Change Back link to /#case-studies</li>
            <li>Add id=&quot;case-studies&quot; to Insights section</li>
            <li>Browser handles scroll restoration natively. No extra JS.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Result — Before / After</h2>
          <p className="mt-3 opacity-80">
            Red = Before (jumps to top). Green = After (stays on Insights). Same video you scheduled for Friday.
          </p>
          <div className="mt-4">
            <iframe
              src="https://www.youtube.com/embed/HAxFw7L-T8Q"
              className="w-full aspect-video rounded-xl border"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Novi Before After"
            />
          </div>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold">Client Lesson</h2>
          <p className="mt-3 opacity-80">
            We audit this &quot;Scroll Reset Leak&quot; on every store. It&apos;s a small UX bug with big revenue impact.
            If your Shopify store has this, you&apos;re leaking warm buyers daily.
          </p>
        </section>
      </div>

      <div className="mt-16">
        <Link href="/#case-studies" className="inline-block border px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
          View All Case Studies
        </Link>
      </div>
    </main>
  );
}
