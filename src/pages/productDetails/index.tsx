import { useLocation } from "react-router-dom"
import useFetchData from "../../hooks/useFetchData"
import Loading from "../../components/loading"
import Error from "../../components/error"
import ProductDetails from "../../components/productDetails"

export default function ProductDetailsPage() {
  const location = useLocation()
  const { data, loading, error } = useFetchData(location.pathname || '')

  return (
    <div>
      {loading && <Loading />}
      {error && <Error msg={error?.message} />}
      {data && <ProductDetails result={data} />}
    </div>
  )
}
