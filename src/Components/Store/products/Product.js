import React from 'react'
import './Products.scss'
import ipad from '../../../assets/ipad.png'
import iphone14 from '../../../assets/iPhone14pro.png'

function Product(props) {
  return (
    <div className='product'>
        <img src={props.image}/>
        <p>{props.product_name}</p>
        <p>{props.price}</p>
        <button>Add To Cart</button>
    </div>
  )
}

export default Product