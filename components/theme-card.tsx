import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Theme } from "@/lib/types"
import { Calendar, Tag } from "lucide-react"

interface ThemeCardProps {
  theme: Theme
}

export function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <Card className="overflow-hidden group">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={theme.preview_image || "/placeholder.svg"}
            alt={`${theme.title} preview`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {theme.featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-teal-50 text-teal-600">
                FEATURED THEME
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{theme.title}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              {theme.last_updated && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {theme.last_updated}
                </div>
              )}
              {theme.version && (
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />v{theme.version}
                </div>
              )}
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-gray-400 mt-2 sm:mt-0">${theme.price}</div>
        </div>
        <p className="text-base sm:text-lg mb-4">{theme.short_description}</p>
        {theme.categories && (
          <div className="flex flex-wrap gap-2 mb-4">
            {theme.categories.map((category) => (
              <Badge key={category} variant="outline">
                {category}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-4">
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href={theme.demo_url} target="_blank" rel="noopener noreferrer">
            Live Demo
          </Link>
        </Button>
        <Button asChild className="w-full sm:w-auto">
          <Link href={`/themes/${theme.slug}`}>More Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

