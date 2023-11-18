import { React, useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import productsContext from '../../context/ProductsContext'
import "./Cart.css"

export default function Cart() {
    const contextData = useContext(productsContext);

    return (
        // add active class to show the sidebar
        <aside className={`bag-sidebar ${contextData.showCart ? "active" : ""}`}>
            <h3 className='bag-title d-flex justify-content-between align-content-center'>
                <span className='sidebar-close-btn'>
                    <IoIosCloseCircleOutline onClick={() => contextData.setShowCart(false)} />
                </span>
                <span className='d-flex justify-content-between align-content-center'>
                    <span className='sidebar-title'>CART</span>
                    <AiOutlineShoppingCart />
                </span>
            </h3>
            <div className='row bag-wrapper'>
                <div className='col-12 mt-5'>
                    {contextData.userCart.map((item, index) => (
                        <div key={item.id} className='card py-3 px-3'>
                            <div className='col-12 text-center'>
                                <img className='cart-img-top w-75' src={item.img} alt="product-image" />
                            </div>
                            <div className='card-body text-center d-flex flex-column justify-content-center align-content-center'>
                                <p className='card-text'>{item.title}</p>
                                <p className='price'>{item.price * item.number}$</p> <br />
                                <a href="#" className='btn btn-danger mb-2'>Buy</a>
                                <p className='number'>Number: {item.number}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </aside>
    )
}
