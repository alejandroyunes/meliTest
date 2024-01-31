import React from 'react'
import './products.scss'
import BreadCrumb from '../breadcrumb/Index'
import Product, { ProductsProps } from '../product'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function Products({ result }: ProductsProps) {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{'Todos los productos'}</title>
          <meta name="description" content="Todos los productos que necesitas" />
        </Helmet>
      </HelmetProvider>
      <BreadCrumb />
      <section className='products-wrapper'>
        <div className='products-content'>
          <Product result={result} />
        </div>
      </section>
    </>
  )
}