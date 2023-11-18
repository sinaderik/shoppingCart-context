import { React, useContext } from 'react'
import "./Toast.css"
import productsContext from '../../context/ProductsContext'

export default function Toast() {
    const contextData = useContext(productsContext);

    return (
        <div className='toast-container position-fixed bottom-0 me-4 end-0 mb-4'>
            <div className={`toast ${contextData.showToast ? "show " : ""}align-items-center text-white bg-primary`}> {/* add class of "show" to see the element */}
                <div className='d-flex justify-content-between align-items-center'>
                    <button
                        type='button'
                        className='btn-close btn-close-white ms-3'
                        onClick={() => {
                            contextData.setShowToast(false)
                        }}
                    >
                    </button>
                    <div className='toast-body'>Product is added to the cart</div>
                </div>
            </div>
        </div>
    )
}
