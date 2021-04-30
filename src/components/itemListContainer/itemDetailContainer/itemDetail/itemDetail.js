import React from 'react';
import { ItemCount } from '../../itemCount/itemCount';
import './itemDetail.css'

export const ItemDetail = ({picture, title, description, gender, price, stock}) =>{
    return (
        <div className="item col-8">
            <div className="item-image">
                <img src={picture} className="h-full mx-auto"/>
            </div>
            <div className="item-data">
                <h2 className="data-title">{title}</h2>
                <h3 className="data-price">{price}</h3>
            </div>
            <p className="item-desc">{description}</p>
            <div className="item-buy">
                <ItemCount initial="1" stock={stock} />
                <input type="button" value="comprar" className="btn btn-buy" />
            </div>
        </div>
    )
}