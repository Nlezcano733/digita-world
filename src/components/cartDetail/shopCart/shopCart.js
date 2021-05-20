import React from 'react';
import { Link } from 'react-router-dom';
import './shopCart.css';

export const ShopCart = ({name, price, id, quantity, removeItems, totalPrice}) =>{
    let totalItem = totalPrice(price, quantity)
    
    return(
        <div className="container checkout">
            <h3 className="col-6">{name}</h3>
            <div className="col-4 checkout-options">
                <p className="mr-2">{`cantidad: ${quantity}`}</p>
                <div className="inline-block">
                    <Link to={`/detail/${id}`} className="btn btn-open">
                        Agregar
                    </Link>
                    <button className="btn btn-close ml-2" onClick={()=>{removeItems({id})}}>
                        Eliminar
                    </button>
                </div>
            </div>
            <h4 className="col-2 checkout-total">${totalItem}</h4>
        </div>
    )
}