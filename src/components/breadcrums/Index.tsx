import './breadcrum.scss'
import useFetchData from '../../hooks/useFetchData'
import { useEffect } from 'react'
import React from 'react'

interface PathFromRoot {
  id: string
  name: string
}

interface FilterValue {
  id: string
  name: string
  path_from_root?: PathFromRoot[]
}

interface Filter {
  id: string
  name: string
  values: FilterValue[]
}

export default function BreadCrums() {

  const searchParams = new URLSearchParams(location.search)
  const searchInput = searchParams.get('search')

  useEffect(() => {
    if (searchInput) {
      localStorage.setItem('searchInput', searchInput)
    }
  }, [searchInput])

  let storedSearchInput: string | null = null

  if (searchInput) {
    storedSearchInput = searchInput
  } else {
    storedSearchInput = localStorage.getItem('searchInput')
  }

  const query = `/sites/MLA/search?q=${storedSearchInput || ''}&limit=1`
  const { data } = useFetchData(query || '')
  const filters: Filter[] = data?.['filters'] || []

  return (
    <section className='breadcrum-wrapper'>
      <div className='breadcrum-content'>

        {filters.length > 0 ? (
          <ul>
            {filters.map((filter) => (
              <li key={filter.id} className='item-list'>
                {filter.values.length > 1 ? (
                  filter.values.map((value, index) => (
                    <React.Fragment key={value.id}>
                      {value.name}
                      {index < filter.values.length - 1 ? ' > ' : ''}
                    </React.Fragment>
                  ))
                ) : (
                  (value => {
                    const pathFromRoot = value.path_from_root?.map((path) => path.name).join(' > ')
                    return pathFromRoot || value.name
                  })(filter.values[0])
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Productos</p>
        )}
      </div>
    </section>
  )
}
