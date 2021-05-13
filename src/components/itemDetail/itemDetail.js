import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ItemCount } from '../itemListContainer/itemCount/itemCount';
import { RecomendationContainer } from '../recomendationContainer/recomendationContainer';
import { CartContext } from '../../context/cartContext';
import './itemDetail.css'
import { ItemList } from '../itemListContainer/itemList/itemList';

export const ItemDetail = ({item}) => {

    const [amount, setamount] = useState(1);
    const [stockRestante, setStockRestante] = useState(item.stock -1);

    const [products, addItems, countItems, RemoveItems, clear] = useContext(CartContext)

    const onAdd = (e, {type}) =>{
        if(type == 'add'){
            if(amount < item.stock){
                setamount(parseInt(amount) + 1);
                setStockRestante((stockRestante) - 1);
                e.target.style.color = "#333333";
            }
            if(amount == item.stock -1){
                e.target.style.color = '#888888';
                e.target.style.backgroundColor = 'transparent';
            }
        }

        if(type == 'sub'){
            if(amount > 1){
                setamount(parseInt(amount) - 1 );
                setStockRestante((stockRestante) + 1);
                e.target.style.color = "#333333";
            }
            if(amount == item.stock -1){
                e.target.style.color = '#888888';
                e.target.style.backgroundColor = 'transparent';
            }
        }
    }
    return (
        <div className="container col-full">
            <div className="item col-full sm:col-8">
                <div className="item-image">
                    <img src={`../${item.picture}`} className="h-full mx-auto"/>
                </div>
                <div className="item-data">
                    <h2 className="data-title">{item.title}</h2>
                    <h3 className="data-price">{`$${item.price}`}</h3>
                </div>
                <p className="item-desc">{item.description}</p>
                <div className="item-buy">
                    <ItemCount 
                        onAdd={onAdd} 
                        amount= {amount}
                    />
                    <Link to={`/cart`} className="btn btn-submit btn-buy" onClick={()=> {addItems(item, amount)}}>
                        <i class="fas fa-plus-circle mr-2"></i>añadir&nbsp;<span className="hidden sm:inline"> al carrito</span>
                    </Link>
                </div>
            </div>
            <RecomendationContainer 
                title={item.title}
                gender={item.gender}
            />
        </div>
    )
}