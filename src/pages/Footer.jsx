import { Link } from 'react-router-dom'
import { CategoryFilter } from '../components/CategoryFilter'

export function Footer({ activeCategory, setActiveCategory }) {
  return (
    <>
      {/* MOBILE FOOTER */}
      <footer className="mt-auto bg-white shadow-[0_-8px_24px_rgba(15,23,42,0.08)] md:hidden">
        <section className="bg-slate-100 px-5 py-4">
          <h2 className="mb-3 text-sm font-extrabold text-slate-900">
            Shop by Category
          </h2>

          <CategoryFilter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </section>

        <nav className="grid grid-cols-4 border-t border-slate-200 bg-white px-4 py-3">
          <Link
            to="/"
            className="flex flex-col items-center gap-1 text-blue-600"
          >
            <span className="text-lg">🏠</span>
            <span className="text-[10px] font-bold uppercase">Home</span>
          </Link>

          <Link
            to="/explore"
            className="flex flex-col items-center gap-1 text-slate-400"
          >
            <span className="text-lg">🧭</span>
            <span className="text-[10px] font-bold uppercase">Explore</span>
          </Link>

          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="text-lg">♥</span>
            <span className="text-[10px] font-bold uppercase">Wishlist</span>
          </button>

          <button className="flex flex-col items-center gap-1 text-slate-400">
            <span className="text-lg">👤</span>
            <span className="text-[10px] font-bold uppercase">Profile</span>
          </button>
        </nav>
      </footer>

      {/* DESKTOP FOOTER */}
      <footer className="mt-16 hidden bg-white md:block">
        <section className="mx-auto grid max-w-6xl grid-cols-4 gap-12 px-6 py-12">
          {/* DESKTOP BRAND */}
          <div>
            <Link to="/" className="text-xl font-extrabold text-blue-700">
              LUXE.
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
              Your one-stop destination for premium lifestyle products, from
              jewelry to electronics. Quality guaranteed.
            </p>

            <div className="mt-6 flex gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-blue-600 hover:text-white">
                ↗
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-blue-600 hover:text-white">
                ◎
              </button>
            </div>
          </div>

          {/* DESKTOP CATEGORIES */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-900">
              Categories
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-slate-500">
              <li>
                <Link
                  to="/products/category/electronics"
                  className="transition hover:text-blue-600"
                >
                  Electronics
                </Link>
              </li>

              <li>
                <Link
                  to="/products/category/jewelery"
                  className="transition hover:text-blue-600"
                >
                  Jewelry
                </Link>
              </li>

              <li>
                <Link
                  to="/products/category/men's%20clothing"
                  className="transition hover:text-blue-600"
                >
                  Men's Fashion
                </Link>
              </li>

              <li>
                <Link
                  to="/products/category/women's%20clothing"
                  className="transition hover:text-blue-600"
                >
                  Women's Fashion
                </Link>
              </li>
            </ul>
          </div>

          {/* DESKTOP SUPPORT */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-900">
              Support
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-slate-500">
              <li>Help Center</li>
              <li>Shipping Policy</li>
              <li>Returns & Refunds</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* DESKTOP NEWSLETTER */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.25em] text-slate-900">
              Newsletter
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Get the latest updates on new arrivals and sales.
            </p>

            <input
              type="email"
              placeholder="Your email address"
              className="mt-4 w-full rounded-lg bg-slate-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600"
            />

            <button className="mt-3 w-full rounded-lg bg-blue-600 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </section>

        {/* DESKTOP FOOTER BOTTOM */}
        <section className="border-t border-slate-200">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-slate-400">
            <p>© 2024 Luxe Store. Powered by FakeStore API.</p>

            <div className="flex gap-6">
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
              <span>Cookies</span>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}
