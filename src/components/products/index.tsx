import './products.scss'
import BreadCrums from '../breadcrums/Index'
import Product, { ProductsProps } from '../product'

export default function Products({ result }: ProductsProps) {

  return (
    <>
      <BreadCrums />
      <section className='products-wrapper'>
        <div className='products-content'>
          <Product result={result} />
        </div>
      </section>
    </>
  )
}