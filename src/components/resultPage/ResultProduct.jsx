import React from 'react'
import './results-products.scss'
import Iphone from '../../resources/iphone.png'
import Shipping from '../../resources/shipping.png'

const ResultProduct = () => (
  <main className='results-wrapper'>
    <div className='results-content'>
      <div className='results'>
        <div className='item-image'>
          <img src={Iphone} alt='' />
        </div>

        <div className='item-details__content'>
          <div className='item-details'>
            <div className='price-item'>
              <div className='item-price'>
                <h3>$ 15, 000</h3>
                <img src={Shipping} alt='shipping truck icon' />
              </div>
            </div>

            <div className='item-location'>
              <p>Capital Federal</p>
            </div>
          </div>

          <div className='item-description'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              illum!
            </p>
          </div>
        </div>
      </div>
      <div className='results'>
        <div className='item-image'>
          <img src={Iphone} alt='' />
        </div>

        <div className='item-details__content'>
          <div className='item-details'>
            <div className='price-item'>
              <div className='item-price'>
                <h3>$ 15, 000</h3>
                <img src={Shipping} alt='shipping truck icon' />
              </div>
            </div>

            <div className='item-location'>
              <p>Capital Federal</p>
            </div>
          </div>

          <div className='item-description'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              illum!
            </p>
          </div>
        </div>
      </div>
      <div className='results'>
        <div className='item-image'>
          <img src={Iphone} alt='' />
        </div>

        <div className='item-details__content'>
          <div className='item-details'>
            <div className='price-item'>
              <div className='item-price'>
                <h3>$ 15, 000</h3>
                <img src={Shipping} alt='shipping truck icon' />
              </div>
            </div>

            <div className='item-location'>
              <p>Capital Federal</p>
            </div>
          </div>

          <div className='item-description'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              illum!
            </p>
          </div>
        </div>
      </div>
      <div className='results'>
        <div className='item-image'>
          <img src={Iphone} alt='' />
        </div>

        <div className='item-details__content'>
          <div className='item-details'>
            <div className='price-item'>
              <div className='item-price'>
                <h3>$ 15, 000</h3>
                <img src={Shipping} alt='shipping truck icon' />
              </div>
            </div>

            <div className='item-location'>
              <p>Capital Federal</p>
            </div>
          </div>

          <div className='item-description'>
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
export default ResultProduct
