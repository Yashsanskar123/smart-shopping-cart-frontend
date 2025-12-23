import { use } from "react"
import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function Cart() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart()
  const navigate = useNavigate()

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + tax

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-8 text-black dark:text-gray-100">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="
          border border-dashed border-gray-300 dark:border-gray-700
          rounded-2xl p-16 text-center
          bg-white dark:bg-[#11161D]
        ">
          <h2 className="text-xl font-semibold text-black dark:text-gray-100">
            Your cart is empty 🛒
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="
                  flex justify-between items-center
                  bg-white dark:bg-[#11161D]
                  border border-gray-200 dark:border-gray-700/60
                  rounded-2xl p-5
                "
              >
                <div>
                  <h3 className="font-semibold text-black dark:text-gray-100">
                    {item.title}
                  </h3>
                  <p className="text-indigo-500 font-bold">
                    ₹{item.price}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    −
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 border rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 ml-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="
            bg-white dark:bg-[#11161D]
            border border-gray-200 dark:border-gray-700/60
            rounded-2xl p-6 h-fit
          ">
            <h2 className="text-xl font-semibold mb-4 text-black dark:text-gray-100">
              Order Summary
            </h2>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>₹{tax}</span>
              </div>

              <div className="border-t pt-3 flex justify-between font-bold text-black dark:text-gray-100">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="
                mt-6 w-full
                px-6 py-3
                rounded-xl
                bg-indigo-600
                text-white
                font-semibold
                hover:bg-indigo-700
                transition
              "
            >
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  )
}
