import React from 'react';
import Slider from './Slider/Slider';
import Categories from './Category/Categories';
import Products from './products/Products';
import Footer from './footer/Footer';

function Store() {
  return (
    <main>
        <Slider/>
        <Categories/>
        <Products/>
        
    </main>
  )
}

export default Store