import { ShoppingCart, Search, Sun, Moon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { cartItems } = useCart()
  const navigate = useNavigate()

  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <nav
      className="
        w-full
        px-6
        py-4
        flex
        items-center
        justify-between
        border-b
        bg-white
        dark:bg-[#0B0F19]
        border-gray-200
        dark:border-gray-800
      "
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-xl font-bold tracking-wide text-black dark:text-white cursor-pointer"
      >
        Smart<span className="text-indigo-600">Cart</span>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-[#111827] rounded-lg px-3 py-2 w-[40%]">
        <Search className="text-gray-500 dark:text-gray-400 mr-2" size={18} />
        <input
          type="text"
          placeholder="Search products..."
          className="bg-transparent outline-none w-full text-black dark:text-white placeholder-gray-500"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 text-black dark:text-white">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="hover:text-indigo-500 transition"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Login */}
        <button className="hover:text-indigo-500 transition">
          Login
        </button>

        {/* Cart */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <ShoppingCart size={22} />
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {totalQty}
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}
