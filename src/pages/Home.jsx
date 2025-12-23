import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../services/api"

export default function Home() {
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    api.get("/categories/parents")
      .then(res => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setCategories(res.data)
        } else {
          setError("No categories found")
        }
      })
      .catch(err => {
        console.error("Category fetch error:", err)
        setError("Failed to load categories")
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="px-6 pt-16 pb-28 transition-colors duration-300">

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black dark:text-white">
          Shop{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Smarter
          </span>
          , Decide{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Faster
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          Choose a category to explore products.
        </p>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="max-w-6xl mx-auto mt-28">
        <h2 className="text-3xl font-bold text-center mb-14 text-black dark:text-white">
          Browse Categories
        </h2>

        {loading && (
          <div className="text-center text-gray-500">
            Loading categories...
          </div>
        )}

        {!loading && error && (
          <div className="text-center text-red-500">
            {error}
          </div>
        )}

        {!loading && !error && categories.length > 0 && (
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-8
              justify-items-center
            "
          >
            {categories.map(cat => (
              <div
                key={cat.name}
                onClick={() =>
                  navigate(`/products/parent/${encodeURIComponent(cat.name)}`)
                }
                className="
                  group
                  cursor-pointer
                  w-full
                  max-w-[220px]
                  rounded-3xl
                  p-[1px]
                  bg-gradient-to-br from-indigo-500/30 to-purple-500/30
                  hover:from-indigo-500 hover:to-purple-500
                  transition
                "
              >
                <div
                  className="
                    min-h-[130px]
                    rounded-3xl
                    px-5
                    py-6
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    bg-white/90 dark:bg-[#0B0F19]/90
                    backdrop-blur-xl
                    transition
                    group-hover:scale-[1.03]
                  "
                >
                  <div
                    className="
                      font-semibold
                      text-base
                      sm:text-lg
                      text-black dark:text-white
                      leading-snug
                      line-clamp-2
                    "
                  >
                    {cat.name}
                  </div>

                  <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {cat.count} products
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  )
}
