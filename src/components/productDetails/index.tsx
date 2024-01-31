import { currencyFormat } from '../../utils/currencyFormat'
import './product-details.scss'

export interface Item {
  id: string
  title: string
  pictures: { url: string }[]
  price: number
}
interface ProductDetailProps {
  result: Item
}

export default function ProductDetails({ result }: ProductDetailProps) {

  return (
    <main className='product-details__wrapper'>
      <div className='product-details__content'>

        <div className='product-details__main'>

          <div className='product-details__image'>
            <img src={result.pictures[0].url} alt={result.title} />
          </div>

          <div className='product-details'>

            <p>Nuevo 242 Vendidos</p>
            <h1>{result.title}</h1>
            <h2>{currencyFormat(result.price)}</h2>

            <div className='product-details__button'>
              <button>Comprar</button>
            </div>
          </div>

        </div>

        <div className='product-details__description'>
          <h2>Descripción del producto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit
            voluptatem repellat voluptas enim a commodi eos obcaecati iusto non
            quia atque, corporis libero error beatae recusandae ipsam. Atque,
            iusto!
          </p>
        </div>

      </div>
    </main>
  )
}
