import BreadCrums from "../../components/breadcrums/Index"
import ProductDetails from "../../components/productDetails"
import Products from "../../components/products"

export default function HomePage() {

  return (
    <main>
      <BreadCrums />
      <Products />
      {/* <ProductDetails /> */}
    </main>
  )
}
