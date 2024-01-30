import { useLocation } from "react-router-dom"
import Products from "../../components/products"
import useFetchData from "../../hooks/useFetchData"

export default function ProductPage() {
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const searchInput = searchParams.get('search')

  const { data, loading, error } = useFetchData(searchInput || '')

  // console.log('data', data?.['results'])
  console.log('data', data)

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <Products result={data?.['results']} />}
    </div>
  )
}


