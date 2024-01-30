import BreadCrums from "./components/breadcrums/Index"
import ProductDetails from "./components/productDetails"
import Products from "./components/products"
import SearchBar from "./components/searchBar/Index"

function App() {

  return (
    <>
      <SearchBar />
      <BreadCrums />
      {/* <Products /> */}
      <ProductDetails />
    </>
  )
}

export default App
