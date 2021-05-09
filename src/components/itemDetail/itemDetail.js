import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ItemCount } from '../itemListContainer/itemCount/itemCount';
import { ItemRecomendation } from '../itemRecomendation/itemRecomentation';
import './itemDetail.css'

export const ItemDetail = ({picture, title, description, gender, price, stock}) =>{

    const [amount, setamount] = useState(1);
    const [stockRestante, setStockRestante] = useState(stock -1);

    const onAdd = (e, {type}) =>{
        if(type == 'add'){
            if(amount < stock){
                setamount(parseInt(amount) + 1);
                setStockRestante((stockRestante) - 1);
                e.target.style.color = "#333333";
            }
            if(amount == stock -1){
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
            if(amount == stock -1){
                e.target.style.color = '#888888';
                e.target.style.backgroundColor = 'transparent';
            }
        }
    }

    return (
        <div className="container col-full">
            <div className="item col-full sm:col-8">
                <div className="item-image">
                    <img src={`../${picture}`} className="h-full mx-auto"/>
                </div>
                <div className="item-data">
                    <h2 className="data-title">{title}</h2>
                    <h3 className="data-price">{price}</h3>
                </div>
                <p className="item-desc">{description}</p>
                <div className="item-buy">
                    <ItemCount 
                        onAdd={onAdd} 
                        amount= {amount}
                    />
                    <Link to={`/cart`} className="btn btn-buy">
                        <i class="fas fa-plus-circle mr-2"></i>añadir &nbsp;<span className="hidden sm:inline"> al carrito</span>
                    </Link>
                </div>
            </div>
            <ItemRecomendation gender={gender}/>
        </div>
    )
}