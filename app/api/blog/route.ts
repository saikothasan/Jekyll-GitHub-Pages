import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"

interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
}

export async function GET() {
  const postsDirectory = path.join(process.cwd(), "content/blog")
  const filenames = await fs.readdir(postsDirectory)

  const posts = await Promise.all(
    filenames
      .filter((file) => file.endsWith(".md"))
      .map(async (filename) => {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = await fs.readFile(filePath, "utf8")
        const { data } = matter(fileContents)

        return {
          slug: filename.replace(".md", ""),
          title: data.title,
          date: data.date,
          author: data.author,
          excerpt: data.excerpt,
        } as BlogPost
      }),
  )

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return NextResponse.json(posts)
}

