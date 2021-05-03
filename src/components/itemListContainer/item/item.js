import React from 'react';
import { Link } from 'react-router-dom';

import './item.css';

export const Item = (props) => {

  return (
    <div className="card col-four">
        <div className="img-container">
            <img src={props.picture} className="img-cover" />
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="price">{props.price}</p>
        < Link to={`/${props.id}`} className="py-2 bg-gray-200 text-center">Ver más</Link>
    </div>
  );
};
