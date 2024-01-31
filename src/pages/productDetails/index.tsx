import { useLocation } from "react-router-dom"
import useFetchData from "../../hooks/useFetchData"
import Loading from "../../components/loading"
import ProductDetails from "../../components/productDetails"
import ErrorMsg from "../../components/error"

export default function ProductDetailsPage() {
  const location = useLocation()
  const { data, loading, error } = useFetchData(location.pathname || '')

  return (
    <div>
      {loading && <Loading />}
      {error && <ErrorMsg msg={error?.message} />}
      {data && <ProductDetails result={data} />}
    </div>
  )
}
