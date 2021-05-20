import React from 'react';
import { useState} from 'react';

import { ItemCount } from '../itemListContainer/itemCount/itemCount';
import { RecomendationContainer } from '../recomendationContainer/recomendationContainer';
import './itemDetail.css'

export const ItemDetail = ({item, stock, setStock, addItems}) => {
    const [amount, setamount] = useState(1);
    const [stockRestante, setStockRestante] = useState(stock - 1);


    const onAdd = (e, {type}) =>{
        if(type == 'add' && amount < stock && stockRestante > 0){
            setamount(amount + 1);
            setStockRestante(stockRestante - 1);
        }

        if(type == 'sub' && amount > 1){
            setamount(amount - 1 );
            setStockRestante(stockRestante + 1);
        }
    }

    const HandleClick = () =>{
        addItems(item, amount)
        if(stockRestante > 0){
            amount === 1 && setStockRestante(stockRestante - 1);
            setStock(stockRestante)
        }
        setamount(1)
    }

    return (
        <div className="container col-full">
            <div className="item col-full sm:col-8">
                <div className="item-image">
                    <img src={item.picture} className="h-full mx-auto"/>
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
                        stock={stock}
                    />
                    <button className="btn btn-submit btn-buy" onClick={HandleClick}>
                        <i className="fas fa-plus-circle mr-2"></i>añadir&nbsp;<span className="hidden sm:inline"> al carrito</span>
                    </button>
                </div>
            </div>
            <RecomendationContainer 
                title={item.title}
                gender={item.gender}
            />
        </div>
    )
}