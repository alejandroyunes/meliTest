import { useLocation } from "react-router-dom"
import Products from "../../components/products"
import useFetchData from "../../hooks/useFetchData"
import Loading from "../../components/loading"
import Error from "../../components/error"
import EmptySearch from "../../components/emptySearch"

export default function ProductPage() {
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const searchInput = searchParams.get('search')

  const { data, loading, error } = useFetchData(searchInput || '')

  return (
    <div>
      {loading && <Loading />}
      {error && <Error msg={error?.message} />}
      {searchInput && data?.['results'] ? <Products result={data?.['results']} /> : <EmptySearch />}
    </div>
  )
}


