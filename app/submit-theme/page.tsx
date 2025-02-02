"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export default function SubmitTheme() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    authorName: "",
    authorEmail: "",
    themeUrl: "",
    previewImageUrl: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement theme submission logic
    console.log("Theme submitted:", formData)
    toast({
      title: "Theme Submitted",
      description: "Thank you for submitting your theme. We'll review it shortly.",
    })
    setFormData({
      title: "",
      description: "",
      authorName: "",
      authorEmail: "",
      themeUrl: "",
      previewImageUrl: "",
    })
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Submit Your Jekyll Theme</h1>
      <p className="mb-6 text-gray-600">
        Share your Jekyll theme with our community. No account required - just fill out the form below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-2 font-medium">
            Theme Title
          </label>
          <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2 font-medium">
            Description
          </label>
          <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="authorName" className="block mb-2 font-medium">
            Author Name
          </label>
          <Input id="authorName" name="authorName" value={formData.authorName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="authorEmail" className="block mb-2 font-medium">
            Author Email
          </label>
          <Input
            id="authorEmail"
            name="authorEmail"
            type="email"
            value={formData.authorEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="themeUrl" className="block mb-2 font-medium">
            Theme URL
          </label>
          <Input id="themeUrl" name="themeUrl" type="url" value={formData.themeUrl} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="previewImageUrl" className="block mb-2 font-medium">
            Preview Image URL
          </label>
          <Input
            id="previewImageUrl"
            name="previewImageUrl"
            type="url"
            value={formData.previewImageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit">Submit Theme</Button>
      </form>
    </div>
  )
}

