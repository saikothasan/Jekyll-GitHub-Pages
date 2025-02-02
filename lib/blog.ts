import type { BlogPost } from "./types"

const mockBlogPosts: BlogPost[] = [
  {
    slug: "top-10-jekyll-themes-2024",
    title: "Top 10 Jekyll Themes for 2024",
    date: "2024-01-15",
    author: "Jekyll Themes Team",
    excerpt:
      "Discover the best Jekyll themes that will dominate the web design landscape in 2024. From minimalist designs to feature-rich templates, we've got you covered.",
    content: "Full blog post content here...",
  },
  {
    slug: "optimizing-jekyll-site-speed",
    title: "How to Optimize Your Jekyll Site for Speed",
    date: "2024-02-02",
    author: "Jekyll Performance Team",
    excerpt:
      "Learn the best practices and techniques to make your Jekyll site lightning fast. We'll cover everything from image optimization to leveraging browser caching.",
    content: "Full blog post content here...",
  },
  // Add more mock blog posts here
]

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // In a real app, this would fetch from an API
  return mockBlogPosts
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // In a real app, this would fetch from an API
  const post = mockBlogPosts.find((p) => p.slug === slug)
  return post || null
}

