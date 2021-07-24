import React, { useState, useContext, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from '../../firebase/index';

import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { ProductContext } from '../../context/productContext';

import { ShopCart } from './shopCart/shopCart';
import { Checkout } from './checkout/checkout';

import './cartDetail.css';

export const CartDetail = () =>{
    const [data, item, getCategories, getList, getGame, updateItems] = useContext(ProductContext);
    const [products, addItems, countItems, RemoveItems, clear, totalItems] = useContext(CartContext);
    const [visibility, setVisibility] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const [orderId, setOrderId] = useState();
    const [error] = useState();

    countItems();
    const db = getFirestore();
    const handleClick = () =>{
        setVisibility(true);
    }

    const totalPrice = (price, quantity) => price *= quantity;

    const sumatoryOfPrices = () =>{
        let totalPrice = [];
        products.forEach(items=>{
            let totalPriceItem = items.price * items.quantity;
            totalPrice.push(totalPriceItem);
        })
        if(totalPrice.length > 0){
            return totalPrice.reduce((accum, item) => accum + item);
        }
    }

    const orders = db.collection('orders');
    useEffect(()=>{
        if(userInfo){
            const newOrder = {
                buyer: userInfo,
                items: products,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: sumatoryOfPrices()
            }

            orders.add(newOrder)
            .then(({id})=> {
                setOrderId(id);
                updateItems(products);
            })
            .catch(err => console.log(err))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, userInfo)


    return (
        <div>
            <div className="container border-b border-gray-200">
                <h1 className="col-8 cart-title">{`Tu carrito (${totalItems})`}</h1>
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
            <div className="buy container">
                <Link to="products/all" className="btn btn-open buy-keep">Continuar comprando</Link>
                <button className="btn btn-submit buy-btn" onClick={handleClick}>Finalizar compra</button>
                <p className="buy-price">total: ${sumatoryOfPrices()}</p>
            </div>
            {visibility === true && 
                <Checkout 
                    setVisibility={setVisibility} 
                    setUserInfo={setUserInfo} 
                    orderId={orderId}
                    error={error}
                    clear={clear}
                />
            }
        </div>
    )
}