export interface Theme {
  slug: string
  title: string
  short_description: string
  description: string
  price: number
  preview_image: string
  demo_url: string
  purchase_url: string
  featured: boolean
  features: string[]
  categories: string[]
  last_updated: string
  version: string
  compatibility: string[]
  documentation_url: string
  support_url: string
  author: {
    name: string
    url: string
  }
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content?: string
}

export interface Review {
  id: string
  author: string
  rating: number
  content: string
  date: string
}

