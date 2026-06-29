import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Loading } from '../components/Loading'
import { ProductDetail } from '../components/ProductDetail'

export function ProductPage({ addToCart }) {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true)
        setError(false)

        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
        )

        setProduct(response.data)
      } catch (error) {
        console.log('Error al cargar el producto:', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    getProduct()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
        <section className="mx-auto max-w-4xl rounded-2xl bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Producto no encontrado
          </h1>

          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-slate-950 px-6 py-3 font-bold text-white"
          >
            Volver al catálogo
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
      <ProductDetail product={product} addToCart={addToCart} />
    </main>
  )
}
