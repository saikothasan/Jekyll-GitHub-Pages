import type { Metadata } from "next"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog | Jekyll Themes",
  description: "Stay updated with the latest news and articles about Jekyll themes and static site development.",
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <p className="text-xl mb-8">
        Stay updated with the latest news and articles about Jekyll themes and static site development.
      </p>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              Published on {new Date(post.date).toLocaleDateString()} by {post.author}
            </p>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline mt-4 inline-block">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

