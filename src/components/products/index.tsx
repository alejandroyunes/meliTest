import React from 'react'
import './products.scss'
import BreadCrumb from '../breadcrumb/Index'
import Product, { ProductsProps } from '../product'
import { Helmet } from "react-helmet"

export default function Products({ result }: ProductsProps) {

  return (
    <>
      <Helmet>
        <title>{'Todos los productos'}</title>
        <meta name="description" content="Todos los productos que necesitas" />
      </Helmet>
      <BreadCrumb />
      <section className='products-wrapper'>
        <div className='products-content'>
          <Product result={result} />
        </div>
      </section>
    </>
  )
}