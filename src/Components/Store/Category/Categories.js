import React from 'react';
import './Category.scss';
import ipad from '../../../assets/ipad.png'
import Category from './Category';

function Categories() {
  return (
    <section className='category'>
        
        <h2>Category</h2>
        
        <div className='cat-list'>
            
            <Category/>
            <Category/>
            <Category/>
        </div>
        
    
    </section>
  )
}

export default Categories