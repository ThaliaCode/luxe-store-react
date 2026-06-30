import { ProductCard } from '../components/ProductCard'
import { SearchBar } from '../components/SearchBar'
import { Loading } from '../components/Loading'
import { useFetchProducts } from '../hooks/useFetchProducts'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Explore({ addToCart }) {
  const { products, loading, error, getProducts } = useFetchProducts()

  const [searchText, setSearchText] = useState('')
const filteredProducts = products.filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes(searchText.toLowerCase())

  return matchesSearch
})

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
        <section className="mx-auto max-w-6xl rounded-xl bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Error al cargar productos
          </h1>

          <button
            onClick={getProducts}
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
              Catalog
            </p>
            <h1 className="text-3xl font-extrabold text-slate-950">
              Explore Products
            </h1>
          </div>

          <Link
            to="/"
            className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white"
          >
            Home
          </Link>
        </div>

        <div className="mb-6">
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </div>

        {/* CATEGORY LINKS */}
        <div className="mb-6 flex gap-3 overflow-x-auto">
          <Link
            to="/explore"
            className="rounded-full bg-slate-950 px-5 py-2 text-sm font-bold text-white"
          >
            Todos
          </Link>

          <Link
            to="/products/category/electronics"
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-700 shadow-sm"
          >
            Electronics
          </Link>

          <Link
            to="/products/category/jewelery"
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-700 shadow-sm"
          >
            Jewelery
          </Link>

          <Link
            to="/products/category/men's%20clothing"
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-700 shadow-sm"
          >
            Men
          </Link>

          <Link
            to="/products/category/women's%20clothing"
            className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-700 shadow-sm"
          >
            Women
          </Link>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="rounded-xl bg-white p-6 text-center font-bold text-slate-500">
            No se encontraron productos.
          </p>
        ) : (
          <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
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
