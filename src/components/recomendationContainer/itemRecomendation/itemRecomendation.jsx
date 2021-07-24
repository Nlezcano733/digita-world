import React from 'react';
import { Link } from 'react-router-dom';

import './itemRecomendation.css';

export const ItemRecomendation = ({title, picture, id, HandleClick}) =>{
    return (
        <div className="itemRecomendation">
            <div className="item-logo">
                <img src={picture} />
            </div>
            <h2 className="item-title">{title}</h2>
            <Link 
                to={`/detail/${id}`} 
                className="btn btn-submit btn-buy mx-auto" 
                onClick={()=> HandleClick(id)}
            >
            Ver más
            </Link>
        </div>
    )
}