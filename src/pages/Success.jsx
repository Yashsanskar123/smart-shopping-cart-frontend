import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useEffect } from "react"

export default function Success() {
  const navigate = useNavigate()
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">

      <div className="text-6xl mb-4">✅</div>

      <h1 className="text-3xl font-bold text-black dark:text-gray-100">
        Order Placed Successfully!
      </h1>

      <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md">
        Thank you for shopping with SmartCart.  
        Your order has been placed and is being processed.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-8 px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
      >
        Continue Shopping
      </button>
    </div>
  )
}
