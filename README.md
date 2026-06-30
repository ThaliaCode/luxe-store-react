# FakeStore API Catalog - LUXE Store

##  Descripción

LUXE Store es un catálogo de productos desarrollado con React y Vite. El proyecto consume la FakeStoreAPI para mostrar productos, detalles individuales, búsqueda en tiempo real, filtrado por categorías mediante rutas dinámicas y una funcionalidad adicional de carrito de compras.

El objetivo del proyecto es practicar consumo de APIs, React Router DOM, manejo de estados con Hooks, renderizado condicional y diseño responsive mobile-first.

##  Despliegue

URL del sitio en vivo:

Pendiente de agregar URL de Vercel.

##  Repositorio

URL del repositorio:

https://github.com/ThaliaCode/luxe-store-react

##  Instalación

Para ejecutar el proyecto localmente:

```bash
git clone https://github.com/ThaliaCode/luxe-store-react.git
cd luxe-store-react
npm install
npm run dev
```

Si usas pnpm:

```bash
pnpm install
pnpm run dev
```

## ⚙️ Características

* Listado de productos consumidos desde FakeStoreAPI.
* Página principal responsive con productos destacados.
* Catálogo completo en la ruta `/explore`.
* Página de detalle de producto con ruta dinámica `/products/:id`.
* Filtro por categorías usando la ruta `/products/category/:category`.
* Consumo del endpoint específico de categorías.
* Buscador en tiempo real por nombre de producto.
* Manejo de estados de carga con componente Loading.
* Manejo de errores con opción de reintentar.
* Página NotFound para rutas inexistentes.
* Carrito de compras como funcionalidad bonus.
* Agregar productos al carrito.
* Eliminar productos del carrito.
* Mostrar cantidad de productos en el carrito.
* Calcular total del carrito.
* Diseño responsive para mobile y desktop.

##  Endpoints utilizados

```txt
GET /products
GET /products/:id
GET /products/category/:category
```

##  Rutas principales

```txt
/                              Página principal
/explore                       Catálogo completo
/products/:id                  Detalle de producto
/products/category/:category   Productos por categoría
*                              Página no encontrada
```

##  Tecnologías utilizadas

* React
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* FakeStoreAPI
* Git y GitHub
* Vercel

##  Responsive Design

El proyecto fue desarrollado con enfoque mobile-first.
En mobile, la página principal muestra una selección reducida de productos para mejorar la experiencia visual.
En desktop, se muestra una vista más amplia con hero, navegación, catálogo y footer adaptado.

##  Bonus: Carrito de compras

El carrito permite:

* Añadir productos.
* Mostrar cantidad de productos.
* Eliminar productos.
* Calcular el total.
* Mostrar un badge con la cantidad de productos añadidos.

##  Integrantes del Equipo



## Autor

* Thalia

Proyecto desarrollado como parte del Mini Proyecto React - FakeStore API Catalog.
