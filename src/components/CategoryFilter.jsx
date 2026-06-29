import womenIcon from '../assets/icons/women-svgrepo-com.svg'
import mens from '../assets/icons/men-svgrepo-com.svg'
import jewelery from '../assets/icons/rings-svgrepo-com.svg'
import electronics from '../assets/icons/devices-svgrepo-com.svg'

export function CategoryFilter({ activeCategory, setActiveCategory }) {
  const categories = [
    { label: 'Todos', value: 'all', icon: null },
    { label: 'Electronics', value: 'electronics', icon: electronics },
    { label: 'Jewelery', value: 'jewelery', icon: jewelery },
    { label: "Men's", value: "men's clothing", icon: mens },
    { label: "Women's", value: "women's clothing", icon: womenIcon },
  ]

  return (
    <section className="flex gap-3 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => setActiveCategory(category.value)}
          className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold ${
            activeCategory === category.value
              ? 'bg-slate-950 text-white'
              : 'bg-white text-slate-700 shadow-sm'
          }`}
        >
          {category.icon && (
            <img
              src={category.icon}
              alt={category.label}
              className="h-5 w-5 object-contain"
            />
          )}
          <span>{category.label}</span>
        </button>
      ))}
    </section>
  )
}
