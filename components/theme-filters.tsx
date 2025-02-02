"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ThemeFiltersProps {
  categories: string[]
}

export function ThemeFilters({ categories }: ThemeFiltersProps) {
  const [category, setCategory] = useState("all")
  const [search, setSearch] = useState("")

  const handleFilterChange = () => {
    // This function will be implemented in the parent component
    // when we add client-side filtering functionality
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <Input
        placeholder="Search themes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="sm:max-w-[300px]"
      />
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="sm:max-w-[200px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

