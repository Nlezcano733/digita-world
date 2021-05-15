import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { ShopCart } from './shopCart/shopCart';

import './cartDetail.css';

export const CartDetail = () =>{
    const [products, addItems, countItems, RemoveItems, clear] = useContext(CartContext)

    const totalPrice = (price, quantity) => price *= quantity;

    const sumatoryOfPrices = () =>{
        let totalPrice = []
        products.forEach(items=>{
            let totalPriceItem = items.price * items.quantity
            totalPrice.push(totalPriceItem)
        })
        if(totalPrice.length > 0){
            return totalPrice.reduce((accum, item) => accum + item)
        }
    }

    return (
        <div>
            <div className="container border-b border-gray-200">
                <h1 className="col-8 cart-title">{`Tu carrito (${countItems()})`}</h1>
                <button className="btn btn-close btn-empty col-4" onClick={clear}>Vaciar carrito</button>
            </div>
            <div className="checkout-container">
                {products.map(({name, price, id, quantity})=>(
                    <ShopCart
                        name={name}
                        price={price}
                        id={id}
                        quantity={quantity}
                        removeItems={RemoveItems}
                        totalPrice={totalPrice}
                    />
                ))}
            </div>
            <div>
                <p className="cart-price">total: ${sumatoryOfPrices()}</p>
            </div>
        </div>
    )
}