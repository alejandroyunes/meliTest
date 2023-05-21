import React from 'react'
import './results-products.scss'
import Iphone from '../../resources/iphone.png'
import Shipping from '../../resources/shipping.png'

const ResultProduct = () => (
  <div className='results-wrapper'>
    <div className='results'>
      <div className='item-image'>
        <img src={Iphone} alt='' />
      </div>

      <div className='item-details'>
        <div className='item'>
          <div className='item-price'>
            <h3>$ 15, 000</h3>
            <img src={Shipping} alt='shipping truck icon' />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            labore?
          </p>
        </div>
        <div className='item item-location'>
          <p>Capital Federal</p>
        </div>
      </div>
    </div>

    <div className='results'>
      <div className='item-image'>
        <img src={Iphone} alt='' />
      </div>

      <div className='item-details'>
        <div className='item'>
          <div className='item-price'>
            <h3>$ 15, 000</h3>
            <img src={Shipping} alt='shipping truck icon' />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            labore?
          </p>
        </div>
        <div className='item item-location'>
          <p>Capital Federal</p>
        </div>
      </div>
    </div>

    <div className='results'>
      <div className='item-image'>
        <img src={Iphone} alt='' />
      </div>

      <div className='item-details'>
        <div className='item'>
          <div className='item-price'>
            <h3>$ 15, 000</h3>
            <img src={Shipping} alt='shipping truck icon' />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            labore?
          </p>
        </div>
        <div className='item item-location'>
          <p>Capital Federal</p>
        </div>
      </div>
    </div>

    <div className='results'>
      <div className='item-image'>
        <img src={Iphone} alt='' />
      </div>

      <div className='item-details'>
        <div className='item'>
          <div className='item-price'>
            <h3>$ 15, 000</h3>
            <img src={Shipping} alt='shipping truck icon' />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            labore?
          </p>
        </div>
        <div className='item item-location'>
          <p>Capital Federal</p>
        </div>
      </div>
    </div>
  </div>
)
export default ResultProduct
