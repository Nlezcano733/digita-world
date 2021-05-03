import React, { useEffect, useState } from 'react';
import { Route, useParams } from 'react-router-dom';

import { ItemDetail } from '../../components/itemDetail/itemDetail';
import { ItemRecomendation } from '../../components/itemRecomendation/itemRecomentation';
import data from '../../products.json';

import './itemDetailContainer.css';

export const ItemDetailContainer = () => {
    const gameParam = useParams()

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
                const filterId = result.filter(game => game.id == gameParam.id)
                filterId.length != 0 && setItem(filterId[0])
            }
        }, item);
    });

    return (
        <Route path="/:id">
            <div className="detailContainer">
                <h1 className="mb-3 sm:mb-6">Detalle del producto</h1>
                {item == undefined 
                    ? <p className="col-full spinner"><i class="fas fa-spinner"></i></p>
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
        </Route>
    )
}