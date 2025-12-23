import { useParams } from "react-router-dom"
import RatingStars from "../components/RatingStars"
import { useCart } from "../context/CartContext"

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useCart()

  // Dummy product (later backend se aayega)
  const product = {
    id,
    title: "Wireless Headphones",
    price: 2999,
    rating: 4.6,
    description:
      "High-quality wireless headphones with noise cancellation, long battery life, and premium sound clarity. Perfect for music, calls, and daily use.",
  }

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* Image Section */}
        <div className="bg-gray-200 dark:bg-[#1A2028] rounded-3xl h-96" />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-gray-100">
            {product.title}
          </h1>

          <div className="mt-3">
            <RatingStars rating={product.rating} />
          </div>

          <div className="mt-4 text-2xl font-bold text-indigo-500">
            ₹{product.price}
          </div>

          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="
              mt-8
              px-8
              py-3
              rounded-xl
              bg-indigo-600
              text-white
              font-semibold
              hover:bg-indigo-700
              transition
            "
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  )
}
