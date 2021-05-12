import React from 'react';
import { Link } from 'react-router-dom';

import './itemRecomendation.css';

export const ItemRecomendation = ({title, picture, id}) =>{
    return (
        <div className="itemRecomendation">
            <div className="item-logo">
                <img src={`../${picture}`} />
            </div>
            <h2 className="item-title">{title}</h2>
            <Link to={`/products/${id}`} className="btn btn-submit btn-buy mx-auto">Ver más</Link>
        </div>
    )
}