// eslint-disable-next-line
import React, { Component } from 'react'

const cartItem = (props) => {
    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
        <div className="cart-item flex p-4">
            <div className="left-block">
                <img className=" w-32 h-32 border-2 rounded-xl" src={product.img} />
            </div>
            <div className="right-block h-32 pl-8">
                <div className="text-2xl ">{title}</div>
                <div className="text-gray-500">Rs {price}</div>
                <div className="text-gray-500">qty:{qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <div onClick={() => onIncreaseQuantity(product)} className="inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>      {/*SVG FROM HERO ICON */}
                    <div onClick={() => onDecreaseQuantity(product)} className="inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>      {/*SVG FROM HERO ICON */}
                    <div onClick={() => onDeleteProduct(product.id)} className="inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>      {/*SVG FROM HERO ICON */}
                </div>
            </div>
        </div>
    )
}

export default cartItem;