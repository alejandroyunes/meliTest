import React from 'react'
import './search.scss'
import Logo from '../../resources/logo.png'
import Magnet from '../../resources/search.png'

const SearchBar = () => (
  <div className='search-wrapper'>

    <div className='logo'>
      <img src={Logo} alt='Logo Mercado Libre' />
    </div>
    <div className='search-product__input'>
      <div className='search-input'>
        <input type='text' placeholder='Nunca dejes de buscar' />
      </div>
      <div className='search-magnet'>
        <img src={Magnet} alt='buscar buton Mercado Libre' />
      </div>
    </div>

  </div>
)

export default SearchBar
