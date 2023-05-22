import './product-details.scss'
import TestProduct from '../../resources/test-product.webp'

const ProductDetails = () => {
  return (
    <main className='product-details__wrapper'>
      <div className='product-details__content'>
        <div className='product-details__main'>
          <div className='product-details__image'>
            <img src={TestProduct} alt='test product' />
          </div>
          <div>
            <div>
              <p>Nuevo 242 Vendidos</p>
            </div>
            <div>
              <h1>Deco Reverse Sombrero Oxfoxd</h1>
            </div>
            <div>
              <h2>$ 1.990</h2>
            </div>
            <div className='product-details__button'>
              <button>Comprar.</button>
            </div>
          </div>
        </div>
        <div className='product-details__description'>
          <h2>Description of Product</h2>
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

export default ProductDetails
