import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getThemeBySlug } from "@/lib/themes"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Tag, CheckCircle, ExternalLink, Star } from "lucide-react"
import { ReviewSection } from "@/components/review-section"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const theme = await getThemeBySlug(params.slug)
  if (!theme) return {}

  return {
    title: `${theme.title} - Jekyll Theme`,
    description: theme.description,
  }
}

export default async function ThemeDetails({ params }: PageProps) {
  const theme = await getThemeBySlug(params.slug)
  if (!theme) notFound()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{theme.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{theme.description}</p>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <span>Updated: {theme.last_updated}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-gray-500" />
            <span>Version: {theme.version}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>4.5/5 (23 reviews)</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {theme.categories &&
            theme.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link href={theme.purchase_url}>Buy Now (${theme.price})</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={theme.demo_url}>Live Demo</Link>
          </Button>
        </div>
      </div>

      <div className="mb-12">
        <Image
          src={theme.preview_image || "/placeholder.svg"}
          alt={`${theme.title} preview`}
          width={800}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <Tabs defaultValue="features" className="mb-12">
        <TabsList>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="compatibility">Compatibility</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>
        <TabsContent value="features">
          <ul className="space-y-2">
            {theme.features &&
              theme.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
          </ul>
        </TabsContent>
        <TabsContent value="compatibility">
          <ul className="space-y-2">
            {theme.compatibility &&
              theme.compatibility.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
          </ul>
        </TabsContent>
        <TabsContent value="support">
          <div className="space-y-4">
            <p>For any questions or issues, please refer to our documentation or contact our support team.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" asChild>
                <Link href={theme.documentation_url}>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Documentation
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={theme.support_url}>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Support
                </Link>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
        <p>
          Created by{" "}
          <a
            href={theme.author.url}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {theme.author.name}
          </a>
        </p>
      </div>

      <ReviewSection themeId={theme.slug} />
    </div>
  )
}

