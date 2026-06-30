import { Link } from 'react-router-dom'

export function ProductDetail({ product, addToCart }) {
  return (
    <section className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-sm md:grid md:grid-cols-2 md:gap-10">
      <div className="flex h-80 items-center justify-center rounded-xl bg-slate-100 p-8">
        <img
          className="h-full w-full object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="mt-8 md:mt-0">
        <p className="text-sm font-bold uppercase text-blue-600">
          {product.category}
        </p>

        <h1 className="mt-3 text-3xl font-extrabold text-slate-950">
          {product.title}
        </h1>

        <p className="mt-4 text-3xl font-extrabold text-slate-900">
          ${product.price}
        </p>

        <p className="mt-4 text-sm font-bold text-yellow-500">
          ★ {product.rating?.rate} | {product.rating?.count} reviews
        </p>

        <p className="mt-6 leading-7 text-slate-600">{product.description}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/explore"
            className="rounded-lg border border-slate-300 px-6 py-3 text-center font-bold text-slate-800"
          >
            Atrás
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </section>
  )
}
