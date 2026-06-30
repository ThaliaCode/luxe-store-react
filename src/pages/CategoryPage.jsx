import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { ProductCard } from "../components/ProductCard"
import { Loading } from "../components/Loading"

export function CategoryPage({ addToCart }) {
  const { category } = useParams()

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let isActive = true

    async function loadProductsByCategory() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${encodeURIComponent(
            category
          )}`
        )

        if (isActive) {
          setProducts(response.data)
          setError(false)
        }
      } catch (error) {
        console.log("Error al cargar la categoría:", error)

        if (isActive) {
          setError(true)
        }
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }

    loadProductsByCategory()

    return () => {
      isActive = false
    }
  }, [category])

  async function retryProductsByCategory() {
    try {
      setLoading(true)
      setError(false)

      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${encodeURIComponent(
          category
        )}`
      )

      setProducts(response.data)
    } catch (error) {
      console.log("Error al cargar la categoría:", error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
        <section className="mx-auto max-w-6xl rounded-xl bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Error al cargar la categoría
          </h1>

          <button
            onClick={retryProductsByCategory}
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
          >
            Reintentar
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-6 text-slate-900 md:px-10">
      <section className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Category
            </p>

            <h1 className="text-3xl font-extrabold capitalize text-slate-950">
              {category}
            </h1>
          </div>

          <Link
            to="/explore"
            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white"
          >
            All Products
          </Link>
        </div>

        {products.length === 0 ? (
          <p className="rounded-xl bg-white p-6 text-center font-bold text-slate-500">
            No se encontraron productos en esta categoría.
          </p>
        ) : (
          <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </section>
        )}
      </section>
    </main>
  )
}