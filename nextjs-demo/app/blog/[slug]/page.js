export default function BlogPostPage({ params}) {
  return <main>
    <h1>Blog Post for {params.slug}</h1>
    <p>This is a blog post.</p>
  </main>;
}