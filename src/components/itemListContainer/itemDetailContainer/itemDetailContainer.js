import React, { useEffect, useRef, useState } from 'react';
import { ItemDetail } from './itemDetail/itemDetail';
import data from '../../../products.json';

import './itemDetailContainer.css';

export const ItemDetailContainer = ({state, id}) => {

    const divGeneral = useRef();
    const handleClick = () =>{
        divGeneral.current.className = 'hidden';
    }

    const [item, setItem] = useState();
    const games = () =>{
        return new Promise ((response) =>{
            setTimeout(() =>{
                return response(data);
            },2000);
        });
    };

    useEffect(()=>{
        games (item).then((result) => {
            if(item == undefined){
                const filterId = result.filter(game => game.id == id)
                filterId.length != 0 && setItem(filterId[0])
            }
        }, item);
    });

    return (
        <div ref={divGeneral} className={state}>
            <h1>Detalle del producto</h1>
            <i className="fas fa-times detail-exit" onClick={handleClick}></i>
            {item == undefined 
                ? <p className="col-full text-xl text-center tracking-wide mt-20">Aguarde unos segundos ...</p>
                :< ItemDetail 
                    picture={item.picture}
                    title={item.title}
                    description={item.description}
                    gender={item.gender}
                    price={item.price}
                    stock={item.stock}
                />
            }
        </div>
    )
}