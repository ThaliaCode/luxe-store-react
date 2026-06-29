export function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f7fb]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-blue-600"></div>

        <p className="text-xl font-bold text-slate-700">
          Cargando productos...
        </p>
      </div>
    </main>
  )
}
