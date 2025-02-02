"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

interface Review {
  id: string
  author: string
  rating: number
  content: string
  date: string
}

interface ReviewSectionProps {
  themeId: string
}

export function ReviewSection({ themeId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      author: "John Doe",
      rating: 5,
      content: "This theme is amazing! It's easy to use and looks great.",
      date: "2024-02-15",
    },
    {
      id: "2",
      author: "Jane Smith",
      rating: 4,
      content: "Good theme overall, but could use more customization options.",
      date: "2024-02-10",
    },
  ])
  const [newReview, setNewReview] = useState({ rating: 0, content: "" })

  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }))
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prev) => ({ ...prev, content: e.target.value }))
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    const review: Review = {
      id: Date.now().toString(),
      author: "Anonymous", // In a real app, this would be the logged-in user
      rating: newReview.rating,
      content: newReview.content,
      date: new Date().toISOString().split("T")[0],
    }
    setReviews((prev) => [review, ...prev])
    setNewReview({ rating: 0, content: "" })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Write a Review</h3>
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block mb-2">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className={`text-2xl ${newReview.rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                >
                  <Star />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="review-content" className="block mb-2">
              Your Review
            </label>
            <Textarea
              id="review-content"
              value={newReview.content}
              onChange={handleContentChange}
              placeholder="Write your review here..."
              className="w-full"
            />
          </div>
          <Button type="submit">Submit Review</Button>
        </form>
      </div>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${review.rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="font-semibold">{review.author}</span>
              <span className="text-gray-500 text-sm">{review.date}</span>
            </div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

