import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Jekyll Themes - Find the best Jekyll themes for your next project",
    template: "%s | Jekyll Themes",
  },
  description: "A curated directory of themes, templates and resources for building Jekyll websites.",
  keywords: ["Jekyll", "themes", "templates", "static sites", "web development"],
  authors: [{ name: "Jekyll Themes Team" }],
  creator: "Jekyll Themes",
  publisher: "Jekyll Themes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jekyllthemes.com",
    site_name: "Jekyll Themes",
    images: [
      {
        url: "https://jekyllthemes.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jekyll Themes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jekyllthemes",
    creator: "@jekyllthemes",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-grow">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  )
}

