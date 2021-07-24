import React from 'react';
import { useRef, useEffect } from 'react';

import './itemCount.css';

export const ItemCount = ({onAdd, amount, stock}) =>{
    let btnAdd = useRef();
    let btnSub = useRef();
    const nodeBtn = [btnAdd.current, btnSub.current];
  
    const colorVerif = () => {
        btnAdd.current.className = "btnCount btnEnabled";
        if (amount === 1) {
        btnSub.current.className = "btnCount btndisabled";
        } else if (amount === stock) {
        btnAdd.current.className = "btnCount btndisabled";
        } else {
        nodeBtn.forEach((item) => {
            item.className = "btnCount btnEnabled";
        });
        }
    };

    useEffect(() => {
        colorVerif();
    });


    return (
    <div className="">
      <div className="contador">
        <input 
          type="button" 
          className="btnCount btnEnabled" 
          ref={btnSub} 
          value="-" 
          onClick={e =>{onAdd (e, {type: 'sub'})}} 
        />

        <p>{amount}</p>

        <input 
          type="button" 
          className="btnCount btnEnabled" 
          ref={btnAdd} 
          value="+" 
          onClick={e=>{onAdd (e, {type: 'add'})}}
        />

      </div>
    </div>
  );
}