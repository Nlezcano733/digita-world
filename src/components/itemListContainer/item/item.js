import React from 'react';
import { Link } from 'react-router-dom';

import './item.css';

export const Item = ({picture, title, price, id}) => {

  return (
    <div className="card col-four">
        <div className="img-container">
            <img src={picture} className="img-cover" />
        </div>
        <h1 className="title">{title}</h1>
        <p className="price">{`$${price}`}</p>
        < Link to={`/products/${id}`} className="py-2 bg-gray-200 text-center">Ver más</Link>
    </div>
  );
};
