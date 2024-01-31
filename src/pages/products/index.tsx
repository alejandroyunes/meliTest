import React from 'react'
import { useLocation } from 'react-router-dom'
import Products from '../../components/products'
import useFetchData from '../../hooks/useFetchData'
import Loading from '../../components/loading'
import ErrorMsg from '../../components/error'

export default function ProductPage() {
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)
  const searchInput = searchParams.get('search')
  const query = `/sites/MLA/search?q=${searchInput}&limit=4`

  const { data, loading, error } = useFetchData(query || '')

  return (
    <div>
      {loading && <Loading />}
      {error && <ErrorMsg msg={error?.message} />}
      {searchInput && data?.['results'] && <Products result={data?.['results']} />}
    </div>
  )
}


