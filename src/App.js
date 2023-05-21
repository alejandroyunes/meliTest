import './index.scss'
import SearchBar from './components/searcBar/Search'
import BreadCrums from './components/breadcrum/BreadCrum'
import ResultProduct from './components/resultPage/ResultProduct'

function App () {
  return (
    <div className='app-wrapper'>
      <div className='search-box__wrapper'>
        <SearchBar />
      </div>

      <div className='product-content'>
        <BreadCrums />
        <ResultProduct />
      </div>
    </div>
  )
}

export default App
