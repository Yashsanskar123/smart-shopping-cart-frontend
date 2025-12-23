import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"


export default function Checkout() {
  const { cartItems } = useCart()
  const navigate = useNavigate()

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + tax

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-10 text-black dark:text-gray-100">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Address Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-[#11161D] border border-gray-200 dark:border-gray-700/60 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-gray-100">
              Shipping Address
            </h2>

            <input className="w-full mb-3 p-3 border rounded" placeholder="Full Name" />
            <input className="w-full mb-3 p-3 border rounded" placeholder="Address" />
            <input className="w-full mb-3 p-3 border rounded" placeholder="City" />
            <input className="w-full mb-3 p-3 border rounded" placeholder="Pincode" />
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white dark:bg-[#11161D] border border-gray-200 dark:border-gray-700/60 rounded-2xl p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-gray-100">
            Order Summary
          </h2>

          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>₹{tax}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-bold text-black dark:text-gray-100">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button 
             onClick= {() => navigate("/success")} 
             className="mt-6 w-full px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
             Place Order
          </button>
        </div>

      </div>
    </div>
  )
}
