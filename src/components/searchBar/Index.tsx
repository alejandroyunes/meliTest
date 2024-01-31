import React from 'react'
import './search.scss'
// import Logo from '../../assets/Logo_ML.png'
// import SearchIcon from '../../assets/ic_Search.png'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/ic_Search.png'

interface SearchBarProps {
  searchInput: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: React.FormEvent) => void
}

export default function SearchBar({ searchInput, handleChange, handleSubmit }: SearchBarProps) {
  const navigate = useNavigate()

  return (
    <header className='search-wrapper'>
      <div className='search-content'>

        <div className='logo' onClick={() => navigate('/')}>
          <img src={logo} alt='Logo Mercado Libre' />
        </div>

        <form className='search-product__input' onSubmit={handleSubmit}>
          <div className='search-input'>
            <input type='text' placeholder='Nunca dejes de buscar' onChange={handleChange} value={searchInput} data-testid="input"/>
          </div>
          <button className='search-icon' type='submit' data-testid="input-button">
            <img src={searchIcon} alt='buscar butón Mercado Libre' />
          </button>
        </form>

      </div>
    </header>
  )
}
