import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"
import { getMarkdownContent } from "@/lib/markdown"
import type { Theme } from "@/lib/types"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), "content/themes", `${slug}.md`)

  try {
    const fileContent = await fs.readFile(filePath, "utf8")
    const { frontMatter } = await getMarkdownContent(fileContent)
    const theme = {
      ...frontMatter,
      slug,
    } as Theme

    return NextResponse.json(theme)
  } catch (error) {
    return new NextResponse("Theme not found", { status: 404 })
  }
}

