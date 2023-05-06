import React from 'react';
import './Category.scss';
import ipad from '../../../assets/ipad.png'
import Category from './Category';
import air from '../../../assets/macAir.png'

function Categories() {
  return (
    <section className='category'>
        
        <h2>Category</h2>
        
        <div className='cat-list'>
            
            <Category cat_name='All Categories' pic={ipad}/>
            <Category cat_name='Laptop & Phones' pic={air}/>
            <Category cat_name='Misc' pic={ipad}/>
        </div>
        
    
    </section>
  )
}

export default Categories