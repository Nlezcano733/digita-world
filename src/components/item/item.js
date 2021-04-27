import React from "react";
import { ItemCount } from '../itemCount/itemCount';

import './item.css';

export const Item = (props) => {
  return (
    <div className="card col-four">
        <div className="img-container">
            <img src={props.picture} className="img-cover" />
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="price">{props.price}</p>
        < ItemCount initial="1" stock={props.stock}/>
    </div>
  );
};
