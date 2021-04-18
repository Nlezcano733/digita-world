import React from 'react';

import './itemListContainer.css';

export const ItemListContainer = (props) =>{
    return (
        <div className="container md:container-xs my-4">
            <div className="col-four card">
                <div className="py-8 h-full bg-gray-400 rounded-lg text-center">inserte imagen</div>
                <h2 className="text-center mt-4">{props.title}</h2>
            </div>
        </div>
    )
}