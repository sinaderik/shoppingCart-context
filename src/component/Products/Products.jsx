import { React, memo, useContext } from 'react'
import productsContext from '../../context/ProductsContext'
import "./Products.css"

function Products() {
    const contextData = useContext(productsContext);

    const toastHandler = (item) => {
        contextData.setShowToast(true)
        setTimeout(() => {
            contextData.setShowToast(false)
        }, 3000)

        const isProductInTheCart = contextData.userCart.some(cartProduct => cartProduct.title === item.title);
        if (!isProductInTheCart) {

            const selectedProduct = {
                id: contextData.userCart.length + 1,
                title: item.title,
                img: item.img,
                price: item.price,
                number: 1
            }
            contextData.setUserCart(previousProducts => [...previousProducts, selectedProduct])
        } else {
            contextData.userCart.some(cartProduct => {
                if (cartProduct.title === item.title) {
                    cartProduct.number += 1;
                    return
                }
            })
        }
    }

    return (
        <>
            {contextData.myProducts.map((productSection, index) => (
                <div key={index + 1} className='row justify-content-center mt-5'>
                    <h3 className='text-center'>{productSection.title}</h3>
                    {productSection.detail.map((item, index) => (
                        <div key={index + 1} className='col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5'>
                            <div key={item.id} className='card py-3 px-3'>
                                <div className='col-12 text-center'>
                                    <img src={item.img} alt="product-image" />
                                </div>
                                <div className='card-body text-center'>
                                    <p className='card-text'>{item.title}</p>
                                    <p className='price'>{item.price}$</p><br />
                                    <a href="#" className='btn btn-danger' onClick={() => toastHandler(item)}>Add to cart</a><br />
                                    <a href="#" className='btn btn-outline-dark mt-3 text-capitalize mb-3'>Read More</a>
                                    <p className='number'>Supply: {item.supply}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    )
}
export default memo(Products)