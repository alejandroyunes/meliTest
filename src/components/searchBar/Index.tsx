import './search.scss'
import Logo from '../../assets/Logo_ML.png'
import SearchIcon from '../../assets/ic_Search.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('')

  let navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchInput(value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!searchInput) {
      return null
    }
    navigate({ pathname: "/items", search: `?search=${searchInput}` })
  }

  return (
    <header className='search-wrapper'>
      <div className='search-content'>

        <div className='logo'>
          <img src={Logo} alt='Logo Mercado Libre' />
        </div>

        <form className='search-product__input' onSubmit={handleSubmit}>
          <div className='search-input'>
            <input type='text' placeholder='Nunca dejes de buscar' onChange={handleChange} value={searchInput} />
          </div>
          <button className='search-icon' type='submit'>
            <img src={SearchIcon} alt='buscar butón Mercado Libre' />
          </button>
        </form>

      </div>
    </header>
  )
}
