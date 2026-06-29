export function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((sum, product) => {
    return sum + product.price * product.quantity
  }, 0)

  return (
    <section className="rounded-xl bg-slate-100 p-5">
      <h2 className="font-bold text-slate-900">Carrito</h2>

      {cartItems.length === 0 ? (
        <p className="mt-2 text-sm text-slate-500">Tu carrito está vacío.</p>
      ) : (
        <div className="mt-4 space-y-3">
          {cartItems.map((product) => (
            <article
              key={product.id}
              className="flex items-center justify-between gap-3 rounded-lg bg-white p-3"
            >
              <img
                className="h-12 w-12 object-contain"
                src={product.image}
                alt={product.title}
              />

              <div className="flex-1">
                <h3 className="line-clamp-1 text-sm font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="text-xs text-slate-500">
                  ${product.price} x {product.quantity}
                </p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <p className="text-sm font-bold text-blue-600">
                  x{product.quantity}
                </p>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="rounded-md bg-red-100 px-2 py-1 text-xs font-bold text-red-600 hover:bg-red-200 active:scale-95"
                >
                  Eliminar
                </button>
              </div>
            </article>
          ))}

          <div className="border-t border-slate-300 pt-3">
            <p className="text-right font-bold text-slate-900">
              Total: ${total.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
