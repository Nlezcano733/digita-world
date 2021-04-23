import React from 'react';
import {useState} from 'react';

import './itemCount.css';

export const ItemCount = ({stock, initial}) =>{
    const [amount, setamount] = useState(initial);
    const [stockRestante, setStockRestante] = useState(stock -1);

    const HandleClick = (e, {type}) =>{

        if(type == 'add'){
            if(amount < stock){
                setamount(parseInt(amount) + 1);
                setStockRestante(parseInt(stockRestante) - 1);
                e.target.style.color = "#333333";
            }
            if(amount == stock -1){
                e.target.style.color = '#888888';
                e.target.style.backgroundColor = 'transparent';
            }
        }

        if(type == 'sub'){
            if(amount > initial){
                setamount(parseInt(amount) - 1 );
                setStockRestante(parseInt(stockRestante) + 1);
                e.target.style.color = "#333333";
            }
            if(amount == stock -1){
                e.target.style.color = '#888888';
                e.target.style.backgroundColor = 'transparent';
            }
        }

    }

    return (
    <div>
      <div className="contador">
        <input type="button" value="-" onClick={(e) =>HandleClick (e, {type: 'sub'}) } />
        <p>{amount}</p>
        <input type="button" value="+" onClick={(e) =>HandleClick (e, {type: 'add'}) } />
      </div>
      <p className="text-center my-4">Stock Restante: {stockRestante}</p>
    </div>
  );
}