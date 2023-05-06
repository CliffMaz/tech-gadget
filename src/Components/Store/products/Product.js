import React from 'react'
import './Products.scss'

function Product(props) {
  return (
    <div className='product'>
        <img src={props.image} alt=''/>
        <p>{props.product_name}</p>
        <p>{props.price}</p>
        <button>Add To Cart</button>
    </div>
  )
}

export default Product