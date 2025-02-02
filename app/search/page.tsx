"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { getAllThemes } from "@/lib/themes"
import { getAllBlogPosts } from "@/lib/blog"
import { ThemeCard } from "@/components/theme-card"
import type { Theme, BlogPost } from "@/lib/types"

export default function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [themes, setThemes] = useState<Theme[]>([])
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchResults = async () => {
      const allThemes = await getAllThemes()
      const allPosts = await getAllBlogPosts()

      const filteredThemes = allThemes.filter(
        (theme) =>
          theme.title.toLowerCase().includes(query.toLowerCase()) ||
          theme.description.toLowerCase().includes(query.toLowerCase()),
      )

      const filteredPosts = allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()),
      )

      setThemes(filteredThemes)
      setPosts(filteredPosts)
    }

    fetchResults()
  }, [query])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Search Results for "{query}"</h1>

      <h2 className="text-2xl font-semibold mb-4">Themes</h2>
      {themes.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {themes.map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} />
          ))}
        </div>
      ) : (
        <p className="mb-12">No themes found matching your search.</p>
      )}

      <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
      {posts.length > 0 ? (
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-8">
              <h3 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-2">
                Published on {new Date(post.date).toLocaleDateString()} by {post.author}
              </p>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      ) : (
        <p>No blog posts found matching your search.</p>
      )}
    </div>
  )
}

