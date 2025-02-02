import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Resources",
  description: "Helpful resources for Jekyll theme development and static site generation.",
}

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Resources</h1>
      <p className="text-xl mb-8">
        Explore our curated list of resources to help you with Jekyll theme development and static site generation.
      </p>
      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="https://jekyllrb.com/docs/" className="text-blue-600 hover:underline">
                Jekyll Documentation
              </Link>
            </li>
            <li>
              <Link href="https://docs.github.com/en/pages" className="text-blue-600 hover:underline">
                GitHub Pages Documentation
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tutorials</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Getting Started with Jekyll
              </Link>
            </li>
            <li>
              <Link href="#" className="text-blue-600 hover:underline">
                Creating Your First Jekyll Theme
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tools</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="https://github.com/jekyll/jekyll-admin" className="text-blue-600 hover:underline">
                Jekyll Admin
              </Link>
              {" - "}A Jekyll plugin that provides users with a traditional CMS-style graphical interface.
            </li>
            <li>
              <Link href="https://github.com/jekyll/jekyll-seo-tag" className="text-blue-600 hover:underline">
                Jekyll SEO Tag
              </Link>
              {" - "}A Jekyll plugin to add metadata tags for search engines and social networks.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

