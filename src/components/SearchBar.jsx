export function SearchBar({ searchText, setSearchText }) {
  return (
    <div>
      <input
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500 md:w-72"
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
    </div>
  )
}
