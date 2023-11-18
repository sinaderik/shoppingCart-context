import { React, useState, useCallback, useEffect } from 'react'
import Navbar from './component/Navbar/Navbar'
import Products from './component/Products/Products'
import allProducts from './data/allProducts'
import Toast from './component/Toast/Toast'
import Cart from './component/Cart/Cart'
import productsContext from './context/ProductsContext'
import "./App.css"


export default function App() {
  const [myProducts, setMyProducts] = useState(allProducts);
  const [userCart, setUserCart] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    if (showToast) {
      const timeoutId = setTimeout(() => {
        setShowToast(false);
      }, 5000); // Adjust this timeout to match the duration of your entrance animation

      return () => clearTimeout(timeoutId);
    }
  }, [showToast]);
  return (

    <div>
      <productsContext.Provider value={{
        myProducts,
        userCart,
        setUserCart,
        showToast,
        setShowToast,
        showCart,
        setShowCart
      }}>
        <Navbar />
        <main className='pb-5 mt-3'>
          <div className='container'>
            <h1 className='text-center main-title'>All Products</h1>
            <Products />
          </div>
        </main>
        <Toast />
        <Cart />
      </productsContext.Provider>
    </div>

  )
}
