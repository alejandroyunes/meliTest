import './products.scss'
import Iphone from '../../assets/iphone.png'
import Shipping from '../../assets/shipping.png'

export default function Products() {
  return (
    <main className='products-wrapper'>
      <div className='products-content'>
        <div className='products'>

          <div className='product-image'>
            <img src={Iphone} alt='' />
          </div>

          <div className='product-details__content'>

            <div className='product-details'>
              <div className='product-price'>
                <h3>$ 15, 000</h3>
                <img src={Shipping} alt='shipping truck icon' />
              </div>

              <div className='product-location'>
                <p>Capital Federal</p>
              </div>
            </div>

            <div className='product-description'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                illum!
              </p>
            </div>

          </div>

        </div>

      </div>
    </main>
  )
}