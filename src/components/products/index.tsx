import './products.scss'
import Shipping from '../../assets/shipping.png'
import { currencyFormat } from '../../utils/currencyFormat'
import { useNavigate } from 'react-router-dom'
import BreadCrums from '../breadcrums/Index'

export interface Item {
  id: string
  title: string
  thumbnail: string
  price: number
  shipping: {
    free_shipping: boolean
  }
}

interface ProductsProps {
  result: Item[]
}

export default function Products({ result }: ProductsProps) {
  const navigate = useNavigate()

  return (
    <>
      <BreadCrums />
      <main className='products-wrapper'>
        <div className='products-content'>
          {result.map((result) => (
            <div className='products' key={result.id} onClick={() => navigate(`${result.id}`)}>

              <div className='product-image'>
                <img src={result.thumbnail} alt={result.title} />
              </div>

              <div className='product-details__content'>

                <div className='product-details'>
                  <div className='product-price'>
                    <h3>{currencyFormat(result.price)}</h3>
                    {result.shipping.free_shipping && <img src={Shipping} alt='free shipping icon' />}
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
          ))}
        </div>
      </main>
    </>
  )
}