import { getAllThemes } from "@/lib/themes"
import { ThemeCard } from "@/components/theme-card"
import { ThemeFilters } from "@/components/theme-filters"

export const metadata = {
  title: "Browse Themes",
  description: "Explore our collection of Jekyll themes for your next project.",
}

export default async function ThemesPage() {
  const themes = await getAllThemes()
  const categories = Array.from(new Set(themes.flatMap((theme) => theme.categories)))

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Browse Themes</h1>
      <ThemeFilters categories={categories} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {themes.map((theme) => (
          <ThemeCard key={theme.slug} theme={theme} />
        ))}
      </div>
    </div>
  )
}

