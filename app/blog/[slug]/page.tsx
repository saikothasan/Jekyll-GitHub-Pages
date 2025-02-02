import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogPostBySlug } from "@/lib/blog"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Jekyll Themes Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">
          Published on {new Date(post.date).toLocaleDateString()} by {post.author}
        </p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content || "" }} />
      </article>
    </div>
  )
}

