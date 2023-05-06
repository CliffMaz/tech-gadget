import React from 'react'
import './Category.scss'
import ipad from '../../../assets/ipad.png'

function Category() {
  return (
        <div className='cat-item'>
                <img src={ipad}/>
                <p>All Products</p>
            </div>
    
  )
}

export default Category