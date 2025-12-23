import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0B0F14] transition-colors duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        
      </Routes>
    </div>
  )
}

export default App
