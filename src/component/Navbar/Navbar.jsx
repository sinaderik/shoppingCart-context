import { React, useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import productsContext from '../../context/ProductsContext'
import "./Navbar.css"

export default function Navbar() {
  const contextData = useContext(productsContext);
  return (
    <div className='navbar navbar-expand-sm py-3 d-flex'>
      <div className='container'>
        <a href="#" className='navbar-brand brand'>Sina Shop</a>
        <ul className='navbar-nav me-auto ms-3'>
          <li className='nav-item'><a href="#" className='nav-link'>Home</a></li>
        </ul>
        <div className='bag-box'>
          <AiOutlineShoppingCart className='cart-icon' onClick={() => contextData.setShowCart(true)} />
          <span className='bag-product-counter'>{contextData.userCart.length}</span>
        </div>
      </div>
    </div>
  )
}
