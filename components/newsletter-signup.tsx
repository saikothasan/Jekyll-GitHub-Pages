"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    setMessage("Thank you for subscribing!")
    setEmail("")
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Subscribe</Button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  )
}

