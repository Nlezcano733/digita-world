import React, { useContext, useEffect } from 'react';
import { useState} from 'react';
import { CartContext } from '../../context/cartContext';

import { ItemCount } from './itemCount/itemCount';
import { RecomendationContainer } from '../recomendationContainer/recomendationContainer';
import './itemDetail.css'

export const ItemDetail = ({item}) => {
    const [stock, setStock] = useState(item.stock)
    const [amount, setAmount] = useState(1)
    const [stockRestante, setStockRestante] = useState(stock - 1);
    const [products, addItems, countItems, RemoveItems, clear, totalItems] = useContext(CartContext);

    const onAdd = (e, {type}) =>{
        if(type == 'add' && amount < stock && stockRestante > 0){
            setAmount(amount + 1);
            setStockRestante(stockRestante - 1);
        }

        if(type == 'sub' && amount > 1){
            setAmount(amount - 1 );
            setStockRestante(stockRestante + 1);
        }
    }

    useEffect(()=>{
        setStock(item.stock)
        setStockRestante(item.stock - 1)
    }, item)

    const HandleClick = () =>{
        addItems(item, amount);
        countItems();
        if(stockRestante > 0){
            amount === 1 && setStockRestante(stockRestante - 1);
            setStock(stockRestante);
        }
        setAmount(1)
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
                    <p>stock disponible: {stock}</p>
                </div>
            </div>
            <RecomendationContainer 
                item={item}
                setAmount={setAmount}
                setStock={setStock}
                setStockRestante={setStockRestante}
            />
        </div>
    )
}