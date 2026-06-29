import { useEffect, useState } from "react"
import axios from "axios"

export function useFetchProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log("Error al cargar productos:", error)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  async function getProducts() {
    try {
      setLoading(true)
      setError(false)

      const response = await axios.get("https://fakestoreapi.com/products")

      setProducts(response.data)
    } catch (error) {
      console.log("Error al cargar productos:", error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return {
    products,
    loading,
    error,
    getProducts,
  }
}