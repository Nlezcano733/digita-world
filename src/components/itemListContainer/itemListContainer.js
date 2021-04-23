import React from 'react';
import { ItemCount } from '../itemCount/itemCount';

import './itemListContainer.css';

export const ItemListContainer = (props) =>{
    return (
        <div className="container mt-4 mb-20">
            <div className="col-four card">
                <div className="py-8 h-full bg-gray-400 rounded-lg text-center">inserte imagen</div>
                <h2 className="text-center mt-4">{props.title}</h2>
                < ItemCount initial="1" stock="5"/>
            </div>
        </div>
    )
}