import { useState, useEffect } from 'react'

const useFetchData = (searchInput: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://api.mercadolibre.com${searchInput}`)
        if (!response.ok) {
          throw new Error('Hubo un error en el request')
        }

        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [searchInput])

  return { data, loading, error }
}

export default useFetchData
