import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        I help US Shopify brands doing $10k+/mo recover 20% revenue with email.
      </h1>
      <p className="mb-4">
        {`I'm Novi — email retention specialist for Shopify. I audit Klaviyo / Omnisend and fix 3 leaks: no post-purchase flow, generic cart recovery, no VIP / lapsed customers.`}
      </p>
      <p className="mb-4">
        {`I work async from Ghana, so you get a 10-min Loom teardown in 24h while you sleep. No meetings needed. Focused on one thing: email that converts.`}
      </p>
      
      {/* FREE AUDIT FORM */}
      <div className="my-8 p-6 border rounded-xl bg-white/50">
        <h2 className="font-semibold mb-2">👉 Get My Free Email Health Check</h2>
        <p className="text-sm mb-4 opacity-70">3 spots this week. 2-min form, I send Loom in 24h.</p>
        <iframe 
          src="https://tally.so/embed/pb8ZoZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          width="100%" 
          height="250" 
          frameBorder="0" 
          title="NOVI Free Email Health Check"
        ></iframe>
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
