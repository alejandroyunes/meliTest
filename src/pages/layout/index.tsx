import { Outlet, useNavigate } from 'react-router-dom'
import SearchBar from '../../components/searchBar/Index'
import { useState } from 'react'

const ITEMS_PATH = '/items'

export default function Layout() {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchInput(value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!searchInput) {
      return null
    }
    navigate({ pathname: ITEMS_PATH, search: `?search=${searchInput}` })
  }
  return (
    <>
      <SearchBar
        searchInput={searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Outlet />
    </>
  )
}
