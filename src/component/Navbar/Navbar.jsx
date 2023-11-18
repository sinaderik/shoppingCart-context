import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar navbar-expand-sm py-3 d-flex'>
      <div className='container'>
        <a href="#" className='navbar-brand brand'>Sina Shop</a>
        <ul className='navbar-nav me-auto ms-3'>
          <li className='nav-item'><a href="#" className='nav-link'>Home</a></li>
        </ul>
        <div className='bag-box'>
          <AiOutlineShoppingCart className='cart-icon' />
          <span className='bag-product-counter'>0</span>
        </div>
      </div>
    </div>
  )
}
