import React from 'react'
import './product.scss'
import Shipping from '../../assets/shipping.png'
import { currencyFormat } from '../../utils/currencyFormat'
import { useNavigate } from 'react-router-dom'

interface Item {
  id: string
  title: string
  thumbnail: string
  price: number
  shipping: {
    free_shipping: boolean
  }
}

export interface ProductsProps {
  result: Item[]
}

export default function Product({ result }: ProductsProps) {
  const navigate = useNavigate()
  return (
    <>

      {result.map((result) => (
        <>
          <div className='product-wrapper' key={result.id} onClick={() => navigate(`${result.id}`)} data-testid="product">

            <div className='product-image'>
              <img src={result.thumbnail} alt={result.title} />
            </div>

            <div className='product-content'>

              <div className='product'>
                <div className='product-price'>
                  <h3>{currencyFormat(result.price)}</h3>
                  {result.shipping.free_shipping && <img src={Shipping} alt='Icono de envio gratis' />}
                </div>

                <div className='product-location'>
                  <p>Capital Federal</p>
                </div>
              </div>

              <div className='product-description'>
                <p>{result.title}</p>
              </div>

            </div>

          </div>
        </>
      ))}
    </>
  )
}