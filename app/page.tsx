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
      <p className="mb-8">
        <a
          href="/blog/think-outside-the-inbox-novi"
          className="font-semibold underline"
        >
          {`👉 Get My Free $150 Audit (3 spots this week) →`}
        </a>
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
