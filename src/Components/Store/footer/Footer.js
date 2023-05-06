import React, {Link} from 'react'
import './Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
        <h1>Tech gadget</h1>
        <div className='contact'>
            <h1>CONTACT</h1>
            <p>123 Street View rd.</p>
            <p>Johannesburg</p>
            <p>Gauteng</p>
            <p>P O Box 1750</p>
            <p>Phone Number: 011 123 4567</p>
        </div>
        <div className='links'>
            <h1>USEFUL LINKS</h1>
            <p>Shop</p>
            <p>Contact</p>
            <p>Account</p>
        </div>

        <div className='news'>
            <h1>NEWSLETTER</h1>
            <input/>
        </div>
    </footer>
  )
}

export default Footer