import RatingStars from "./RatingStars"
import { useNavigate } from "react-router-dom"

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="
        cursor-pointer
        bg-white
        dark:bg-[#11161D]
        border border-gray-200 dark:border-gray-700/60
        rounded-2xl
        p-5
        flex flex-col
        transition
        hover:shadow-xl
        dark:hover:shadow-none
      "
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain rounded-xl mb-4 bg-white"
      />

      {/* Discount Badge */}
      {product.discount && (
        <div className="w-fit mb-2 px-3 py-1 text-xs font-semibold
          bg-green-600 text-white rounded-full">
          {product.discount}% OFF
        </div>
      )}

      {/* Title */}
      <h3 className="font-semibold text-black dark:text-gray-100 mb-1 line-clamp-2">
        {product.title}
      </h3>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-1">
        <RatingStars rating={product.rating} />
        {product.ratingCount && (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({product.ratingCount})
          </span>
        )}
      </div>

      {/* Price */}
      <div className="mt-3 flex items-center gap-2">
        <span className="font-bold text-indigo-500 text-lg">
          ₹{product.price}
        </span>

        {product.actualPrice && (
          <span className="line-through text-sm text-gray-400">
            ₹{product.actualPrice}
          </span>
        )}
      </div>
    </div>
  )
}
