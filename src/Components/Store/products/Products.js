import React from 'react'
import './Products.scss'
import Product from './Product'
import iphone14 from '../../../assets/iPhone14pro.png'
import s23 from '../../../assets/s23.png'
import canon from '../../../assets/canon.png'
import macbook from '../../../assets/macbook.png'

function Products() {
  return (
    <section className='products'>
        
        <h1>Products</h1>
        <div className='items'>
            <Product product_name='iphone 14 Pro Max' image={iphone14} price='R1699'/>
            <Product product_name='Samsung S23 Ultra' image={s23} price='R1599'/>
            <Product product_name='Canon Camera' image={canon} price='R1599'/>
            <Product product_name='Macbook m1' image={macbook} price='R1699'/>
            <Product product_name='Samsung S23 Ultra ' image={s23} price='R1599'/>
            <Product product_name='iphone 14 Pro Max' image={iphone14} price='R1699'/>
        </div>
        
    </section>
  )
}

export default Products