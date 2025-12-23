import { Star } from "lucide-react"

export default function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            rating >= star
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300 dark:text-gray-600"
          }
        />
      ))}
      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
        {rating}
      </span>
    </div>
  )
}
