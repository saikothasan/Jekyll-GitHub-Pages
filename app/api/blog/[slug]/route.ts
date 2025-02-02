import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"
import matter from "gray-matter"
import { getMarkdownContent } from "@/lib/markdown"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`)

  try {
    const fileContents = await fs.readFile(filePath, "utf8")
    const { data, content } = matter(fileContents)
    const { contentHtml } = await getMarkdownContent(content)

    const post = {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      content: contentHtml,
    }

    return NextResponse.json(post)
  } catch (error) {
    return new NextResponse("Blog post not found", { status: 404 })
  }
}

