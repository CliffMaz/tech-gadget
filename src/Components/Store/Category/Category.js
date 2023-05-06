import React from 'react'
import './Category.scss'

function Category({cat_name, pic}) {
  return (
        <div className='cat-item'>
                <img src={pic} alt=''/>
                <p>{cat_name}</p>
            </div>
    
  )
}

export default Category