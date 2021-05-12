import React, { useContext } from 'react';
import { Route } from 'react-router-dom';

import {CartContext} from '../../context/cartContext';
import { ShopCart } from '../../components/shopCart/shopCart';

import './cart.css';

export const Cart = () =>{
    const [products, addItems, countItems, RemoveItems, clear, isInCart] = useContext(CartContext)
    return (
        <Route path="/cart">
            <div className="cart container">
                <div className="col-full container pb-10 pt-2 border-b border-gray-200">
                    <h2 className="col-8 cart-title">{`Tu carrito (${countItems()})`}</h2>
                    <button className="btn btn-close btn-empty col-4" onClick={clear}>Vaciar carrito</button>
                </div>
                <div className="col-full mb-4">
                    {products.map(({name, quantity})=>(
                        <ShopCart
                            name={name}
                            quantity={quantity}
                        />
                    ))}
                </div>
            </div>
        </Route>
    )
}