import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'
import { NotFound } from './pages/NotFound'
import { Explore } from './pages/Explore'
import { CategoryPage } from './pages/CategoryPage'



function App() {
  const [cartItems, setCartItems] = useState([])

  function addToCart(product) {
    const productExists = cartItems.find((item) => item.id === product.id)

    if (productExists) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }

        return item
      })

      setCartItems(updatedCart)
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ])
    }
  }
  function removeFromCart(productId) {
    const updatedCart = cartItems.filter((item) => item.id !== productId)
    setCartItems(updatedCart)
  }

  return (
    <BrowserRouter>
      <Routes>
  <Route
    path="/"
    element={
      <Home
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    }
  />

  <Route
    path="/explore"
    element={<Explore addToCart={addToCart} />}
  />

  <Route
  path="/products/category/:category"
  element={<CategoryPage addToCart={addToCart} />}
/>

  <Route
    path="/products/:id"
    element={<ProductPage addToCart={addToCart} />}
  />

  <Route path="*" element={<NotFound />} />
</Routes>
    </BrowserRouter>
  )
}

export default App
