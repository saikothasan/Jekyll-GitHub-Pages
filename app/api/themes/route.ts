import { NextResponse } from "next/server"
import fs from "fs/promises"
import path from "path"
import { getMarkdownContent } from "@/lib/markdown"
import type { Theme } from "@/lib/types"

export async function GET() {
  const themesDirectory = path.join(process.cwd(), "content/themes")
  const files = await fs.readdir(themesDirectory)

  const themes = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const filePath = path.join(themesDirectory, file)
        const fileContent = await fs.readFile(filePath, "utf8")
        const { frontMatter } = await getMarkdownContent(fileContent)
        return {
          ...frontMatter,
          slug: file.replace(".md", ""),
        } as Theme
      }),
  )

  return NextResponse.json(themes)
}

