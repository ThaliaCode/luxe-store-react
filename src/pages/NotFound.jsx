import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f7fb] px-4">
      <section className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Página no encontrada
        </h1>

        <p className="mt-3 text-slate-500">La ruta que buscas no existe.</p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-slate-950 px-6 py-3 font-bold text-white"
        >
          Volver al inicio
        </Link>
      </section>
    </main>
  )
}
