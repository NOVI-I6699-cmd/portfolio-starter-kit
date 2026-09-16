import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Novi 👋
      </h1>
      <p className="mb-4">
        {`I'm a developer and email marketer building NOVI brand. I help businesses grow with high-converting email campaigns and clean landing pages.`}
      </p>
      <p className="mb-4">
        {`I'm currently learning Next.js and building tools to automate email marketing. My focus is on e-commerce growth, welcome flows, and cart recovery.`}
      </p>
      <p className="mb-4">
        {`This site is my portfolio where I share my projects and what I learn about coding and marketing.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
