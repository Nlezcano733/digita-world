import React from 'react';
import './shopCart.css';

export const ShopCart = ({name, quantity}) =>{
    return(
        <div className="col-full container checkout">
            <h3 className="col-8">{name}</h3>
            <div className="col-4 checkout-options">
                <p className="mr-2">{`cantidad: ${quantity}`}</p>
                <div className="inline-block">
                    <button className="btn btn-open">Agregar</button>
                    <button className="btn btn-close ml-2">Eliminar</button>
                </div>
            </div>
        </div>
    )
}