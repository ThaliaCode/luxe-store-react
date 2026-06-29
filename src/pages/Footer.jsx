import { Link } from 'react-router-dom'
import { CategoryFilter } from '../components/CategoryFilter'

export function Footer({ activeCategory, setActiveCategory }) {
  return (
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
        <Link to="/" className="flex flex-col items-center gap-1 text-blue-600">
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
  )
}
