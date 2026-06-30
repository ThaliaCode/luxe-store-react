import { useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { SearchBar } from '../components/SearchBar'
import { Loading } from '../components/Loading'
import { useFetchProducts } from '../hooks/useFetchProducts'
import { Footer } from './Footer'
import { Cart } from '../components/Cart'
import { Link } from 'react-router-dom'
import heroImage from '../assets/img/hero-fashion.jpg'
import heroDesktop from '../assets/img/hero-desktop.avif'

export function Home({ cartItems, addToCart, removeFromCart }) {
  const { products, loading, error, getProducts } = useFetchProducts()

  const [searchText, setSearchText] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const [showMenu, setShowMenu] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showCart, setShowCart] = useState(false)
  // se muestre 4 produc
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchText.toLowerCase())

    const matchesCategory =
      activeCategory === 'all' || product.category === activeCategory

    return matchesSearch && matchesCategory
  })

  // MOBILE PRODUCTS - muestra solo 4 productos
  const mobileProducts = filteredProducts.slice(0, 4)

  // DESKTOP PRODUCTS - muestra solo 8 productos
  const desktopProducts = filteredProducts.slice(0, 8)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col bg-[#f6f7fb] px-4 pt-4 text-slate-900 md:px-10">
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
    <main className="flex min-h-screen flex-col bg-[#f6f7fb] px-4 pt-4 text-slate-900 md:px-10">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-white md:bg-transparent">
        {/* HEADER */}
        <header className="flex items-center justify-between bg-white px-4 py-4 shadow-sm md:rounded-xl">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl text-slate-900 md:hidden"
          >
            ☰
          </button>

          <button
            onClick={() => setActiveCategory('all')}
            className="flex items-center gap-2"
          >
            <h1 className="text-xl font-extrabold text-blue-700">LUXE</h1>
          </button>

          {/* DESKTOP CATEGORIES */}
          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <button
              onClick={() => setActiveCategory('electronics')}
              className={`transition hover:text-blue-600 ${
                activeCategory === 'electronics'
                  ? 'text-blue-600'
                  : 'text-slate-600'
              }`}
            >
              Electronics
            </button>

            <button
              onClick={() => setActiveCategory('jewelery')}
              className={`transition hover:text-blue-600 ${
                activeCategory === 'jewelery'
                  ? 'text-blue-600'
                  : 'text-slate-600'
              }`}
            >
              Jewelery
            </button>

            <button
              onClick={() => setActiveCategory("men's clothing")}
              className={`transition hover:text-blue-600 ${
                activeCategory === "men's clothing"
                  ? 'text-blue-600'
                  : 'text-slate-600'
              }`}
            >
              Men's
            </button>

            <button
              onClick={() => setActiveCategory("women's clothing")}
              className={`transition hover:text-blue-600 ${
                activeCategory === "women's clothing"
                  ? 'text-blue-600'
                  : 'text-slate-600'
              }`}
            >
              Women's
            </button>
          </nav>

          {/* DESKTOP ACTIONS: search, wishlist, cart, profile */}
          <div className="hidden items-center gap-4 md:flex">
            <SearchBar searchText={searchText} setSearchText={setSearchText} />

            {/* DESKTOP WISHLIST */}
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition hover:bg-slate-200">
              ♥
            </button>

            {/* DESKTOP CART */}
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition hover:bg-slate-200"
            >
              🛒
              {cartItems.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                  {cartItems.length}
                </span>
              )}
            </button>

            {/* DESKTOP PROFILE */}
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition hover:bg-slate-200">
              👤
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-xl text-slate-900"
            >
              🔍
            </button>

            <button
              onClick={() => setShowCart(!showCart)}
              className="text-xl text-slate-900"
            >
              🛍️
            </button>
          </div>
        </header>

        {/* MENU MOBILE */}
        {showMenu && (
          <section className="bg-white px-4 py-4 md:hidden">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setActiveCategory('all')
                  setShowMenu(false)
                }}
                className="rounded-lg bg-slate-950 px-4 py-3 text-sm font-bold text-white"
              >
                Todos
              </button>

              <button
                onClick={() => {
                  setActiveCategory('electronics')
                  setShowMenu(false)
                }}
                className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700"
              >
                Electronics
              </button>

              <button
                onClick={() => {
                  setActiveCategory('jewelery')
                  setShowMenu(false)
                }}
                className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700"
              >
                Jewelery
              </button>

              <button
                onClick={() => {
                  setActiveCategory("men's clothing")
                  setShowMenu(false)
                }}
                className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700"
              >
                Men
              </button>

              <button
                onClick={() => {
                  setActiveCategory("women's clothing")
                  setShowMenu(false)
                }}
                className="rounded-lg bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700"
              >
                Women
              </button>
            </div>
          </section>
        )}

        {/* SEARCH MOBILE */}
        {showSearch && (
          <section className="bg-white px-4 pb-4 md:hidden">
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
          </section>
        )}

        {/* CART MOBILE */}
        {showCart && (
          <section className="bg-white px-4 pb-4 md:hidden">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </section>
        )}

        {/* DESKTOP CART DROPDOWN */}
        {showCart && (
          <section className="hidden bg-white px-4 pb-4 pt-4 md:block">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </section>
        )}

        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 px-5 py-16 text-center text-white md:mt-6 md:rounded-2xl md:px-14 md:py-24 md:text-left">
          {/* Imagen mobile */}
          <img
            src={heroImage}
            alt="New collection mobile"
            className="absolute inset-0 h-full w-full object-cover md:hidden"
          />

          {/* Imagen desktop */}
          <img
            src={heroDesktop}
            alt="New collection desktop"
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
          />

          {/* Capa oscura */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Contenido */}
          <div className="relative z-10">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
              New Collection 2024
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:max-w-xl md:text-6xl">
              Redefine Your Everyday Style
            </h2>

            <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-slate-200 md:mx-0 md:max-w-md md:text-base">
              Discover our curated collection of premium essentials designed for
              the modern lifestyle.
            </p>

            <div className="mt-8 flex flex-col gap-3 md:flex-row">
              <button className="rounded-lg bg-blue-600 px-6 py-4 text-sm font-bold text-white">
                Shop Collection
              </button>

              <Link
                to="/explore"
                className="rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-center text-sm font-bold text-white"
              >
                View Lookbook
              </Link>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="bg-white px-4 py-8 md:bg-transparent md:px-0">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold">New Arrivals</h2>

            <Link to="/explore" className="text-sm font-bold text-blue-600">
              See All →
            </Link>
          </div>

          {/* MOBILE PRODUCTS - solo 4 productos */}
          <section className="grid grid-cols-2 gap-4 md:hidden">
            {mobileProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </section>

          {/* DESKTOP PRODUCTS - 8 productos: 4 columnas x 2 filas */}
          <section className="hidden gap-4 md:grid md:grid-cols-4">
            {desktopProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </section>
        </section>
      </section>

      <Footer
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    </main>
  )
}
