import { BlogPosts } from "app/components/posts"
import AuditForm from "app/components/AuditForm"

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        I help US Shopify brands doing $10k/mo recover 30% revenue with email.
      </h1>
      <p className="mb-4">
        I'm Novi — email retention specialist for Shopify. I audit Klaviyo / Omnisend and fix 3 leaks: no post-purchase flow, generic cart recovery, no VIP.
      </p>
      <p className="mb-8">
        I work async from Ghana, so you get a 10-min Loom teardown in 24h while you sleep. No meetings needed.
      </p>

      <div className="mb-8">
        <AuditForm />
      </div>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
