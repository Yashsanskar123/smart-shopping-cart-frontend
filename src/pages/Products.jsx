import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import api from "../services/api"
import { mapProduct } from "../services/mapper"

export default function Products() {
  const { categoryId } = useParams()
  const navigate = useNavigate()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // 🛡️ Guard: categoryId missing
    if (!categoryId) {
      setError("Invalid category")
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    api.get(`/products/by-category/${categoryId}`)
      .then(res => {
        // backend → frontend mapping
        const mappedProducts = res.data.map(mapProduct)
        setProducts(mappedProducts)
      })
      .catch(err => {
        console.error("Product fetch error:", err)
        setError("Failed to load products")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Products
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Showing products from selected category
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          ← Back to categories
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-gray-500">
          Loading products...
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-red-500">
          {error}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && products.length === 0 && (
        <div className="text-gray-500">
          No products found in this category.
        </div>
      )}

      {/* Products Grid */}
      {!loading && !error && products.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  )
}
