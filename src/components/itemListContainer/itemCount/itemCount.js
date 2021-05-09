import React from 'react';

import './itemCount.css';

export const ItemCount = ({onAdd, amount}) =>{
    return (
    <div className="">
      <div className="contador">
        <input type="button" value="-" onClick={(e)=>{onAdd (e, {type: 'sub'})}} />
        <p>{amount}</p>
        <input type="button" value="+" onClick={(e)=>{onAdd (e, {type: 'add'})}}/>
      </div>
    </div>
  );
}