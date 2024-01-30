import { useState, useEffect } from 'react'

const useFetchData = (searchInput: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchInput}&limit=4`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
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
