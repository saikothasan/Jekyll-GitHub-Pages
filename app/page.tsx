import Link from "next/link"
import { getAllThemes } from "@/lib/themes"
import { WaveDivider } from "@/components/wave-divider"
import { ThemeCard } from "@/components/theme-card"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default async function Home() {
  const themes = await getAllThemes()
  const featuredThemes = themes.filter((theme) => theme.featured).slice(0, 3)
  const recentThemes = themes
    .sort((a, b) => new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime())
    .slice(0, 6)

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#1c1f26] text-white px-4 pt-20 pb-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find the best Jekyll themes
            <br />
            for your next project
          </h1>
          <p className="text-xl mb-8">
            A curated directory of <span className="text-white">themes, templates and resources</span> for building
            Jekyll websites.
          </p>
          <Button asChild size="lg">
            <Link href="/themes">Browse All Themes</Link>
          </Button>
        </div>
        <WaveDivider />
      </div>

      <div className="bg-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Themes</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredThemes.map((theme) => (
              <ThemeCard key={theme.slug} theme={theme} />
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-8">Recently Updated</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {recentThemes.map((theme) => (
              <ThemeCard key={theme.slug} theme={theme} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/themes">View All Themes</Link>
            </Button>
          </div>

          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </div>
  )
}

