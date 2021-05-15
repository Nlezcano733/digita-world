import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Route } from 'react-router-dom';

import { CartDetail } from '../../components/cartDetail/cartDetail';
import { EmptyCart } from '../../components/cartDetail/emptyCart/emptyCart';

import './cartContainer.css';

export const CartContainer = () =>{
    const [products, addItems, countItems, RemoveItems, clear] = useContext(CartContext)

    return (
        <Route path="/cart">
            <div className="cart">
                {products.length > 0
                    ? <CartDetail />
                    : <EmptyCart />
                }
            </div>
        </Route>
    )
}