import './main.scss'
import SearchBar from './components/searcBar/Search'
import BreadCrums from './components/breadcrum/BreadCrum'
import ResultProduct from './components/resultPage/ResultProduct'
import ProductDetail from './components/productDetails/ProductDetail'

function App () {
  return (
    <div className='app-wrapper'>
      <div className='search-box__wrapper'>
        <SearchBar />
      </div>
      <div className='breadcrum-content'>
        <BreadCrums />
      </div>

      {/* <div className='product-content'>
        <ResultProduct />
      </div> */}

      <div className='product-content'>
        <ProductDetail />
      </div>
    </div>
  )
}

export default App
