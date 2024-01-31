import './products.scss'
import BreadCrumb from '../breadcrumb/Index'
import Product, { ProductsProps } from '../product'

export default function Products({ result }: ProductsProps) {

  return (
    <>
      <BreadCrumb />
      <section className='products-wrapper'>
        <div className='products-content'>
          <Product result={result} />
        </div>
      </section>
    </>
  )
}