import React from 'react';
import './Slider.scss'
import iPhone from '../../../assets/iPhone-14.png'

function Slider() {
  return (
    <section className='slider'>
        <div className='left'>

            <h2>Get The Best Tech And <span>Be In Style</span></h2>
            <p>Having the best tech is not about with tech savy but us having your back.</p>
            <button>Shop Now</button>
        </div>
        <div className='right'>
            <img src={iPhone}/>
        </div>
    </section>
  )
}

export default Slider