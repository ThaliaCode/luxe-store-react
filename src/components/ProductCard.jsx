import { Link } from 'react-router-dom'

export function ProductCard({ product, addToCart }) {
  return (
    <article className="rounded-xl bg-white p-3 shadow-sm">
      <Link to={`/products/${product.id}`}>
        <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-xl bg-slate-100 p-3 md:h-60">
          <img
            className="h-full w-full object-contain"
            src={product.image}
            alt={product.title}
          />

          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 shadow">
            ♥
          </span>
        </div>
      </Link>

      <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        {product.category}
      </p>

      <h2 className="mt-1 line-clamp-1 text-sm font-bold text-slate-900">
        {product.title}
      </h2>

      <p className="mt-1 text-base font-extrabold text-blue-600">
        ${product.price}
      </p>

      <Link
        to={`/products/${product.id}`}
        className="mt-3 block w-full rounded-lg border border-slate-300 py-3 text-center text-xs font-bold text-slate-800 transition hover:bg-slate-100"
      >
        Ver detalles
      </Link>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 block w-full rounded-lg bg-slate-950 py-3 text-center text-xs font-bold text-white transition duration-200 hover:bg-blue-600 active:scale-95 active:bg-blue-700"
      >
        🛒 Add to Cart
      </button>
    </article>
  )
}
