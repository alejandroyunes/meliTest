import React from 'react'
import './search.scss'
import Logo from '../../resources/logo.png'
import SearchIcon from '../../resources/search.png'

const SearchBar = () => (
  <>
    <section className='search-wrapper'>
      <div className='search-content'>

        <div className='logo'>
          <img src={Logo} alt='Logo Mercado Libre' />
        </div>

        <div className='search-product__input'>
          <div className='search-input'>
            <input type='text' placeholder='Nunca dejes de buscar' />
          </div>
          <div className='search-icon'>
            <img src={SearchIcon} alt='buscar buton Mercado Libre' />
          </div>
        </div>
        
      </div>
    </section>
  </>
)

export default SearchBar
