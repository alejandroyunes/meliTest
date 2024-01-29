import './search.scss'
import Logo from '../../assets/Logo_ML.png'
import SearchIcon from '../../assets/ic_Search.png'

export default function SearchBar() {
  return (
      <header className='search-wrapper'>
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
      </header>
  )
}
