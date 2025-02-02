import type { Theme } from "./types"

const mockThemes: Theme[] = [
  {
    slug: "personal",
    title: "Personal Jekyll theme",
    short_description: "A sleek, modern personal website theme",
    description:
      "Personal is the perfect theme for developers, designers and other creatives to create a personal website that shows off their projects, blog posts and details.",
    price: 79,
    preview_image: "/themes/personal-preview.jpg",
    demo_url: "https://personal-jekyll.netlify.app",
    purchase_url: "https://gumroad.com/l/personal-jekyll",
    featured: true,
    features: [
      "Responsive design",
      "Dark/Light mode",
      "Blog with categories",
      "Project portfolio",
      "About page",
      "Contact form",
      "SEO optimized",
      "Fast loading",
    ],
    categories: ["Portfolio", "Blog"],
    last_updated: "2024-01-15",
    version: "2.1.0",
    compatibility: ["Jekyll 4.x", "GitHub Pages"],
    documentation_url: "https://docs.personal-jekyll.com",
    support_url: "https://support.personal-jekyll.com",
    author: {
      name: "John Doe",
      url: "https://johndoe.com",
    },
  },
  // Add more mock themes here
]

export async function getAllThemes(): Promise<Theme[]> {
  // In a real app, this would fetch from an API
  return mockThemes
}

export async function getThemeBySlug(slug: string): Promise<Theme | null> {
  // In a real app, this would fetch from an API
  const theme = mockThemes.find((t) => t.slug === slug)
  return theme || null
}

