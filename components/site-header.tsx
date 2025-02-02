"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/search-bar"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#1c1f26] px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-2xl font-bold flex items-center gap-2">
          <Image src="/logo.svg" alt="Jekyll Themes Logo" width={40} height={40} className="w-10 h-10" />
          <span className="hidden sm:inline">Jekyll Themes</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <SearchBar />
          <Link href="/themes" className="text-white hover:text-gray-300">
            Browse Themes
          </Link>
          <Link href="/blog" className="text-white hover:text-gray-300">
            Blog
          </Link>
          <Link href="/submit-theme" className="text-white hover:text-gray-300">
            Submit Theme
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col gap-4">
            <SearchBar />
            <Link href="/themes" className="text-white hover:text-gray-300">
              Browse Themes
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
            <Link href="/submit-theme" className="text-white hover:text-gray-300">
              Submit Theme
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

