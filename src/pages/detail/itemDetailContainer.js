import React, { useEffect, useState, useContext  } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetail } from '../../components/itemDetail/itemDetail';
import { ProductContext } from '../../context/productContext';

import './itemDetailContainer.css';

export const ItemDetailContainer = () => {
    const gameParam = useParams();
    const [stock, setStock] = useState();
    const [data, item, getCategories, getList, getGame, updateItems] = useContext(ProductContext);

    let game = getGame(gameParam.id);
    useEffect(()=>{
        if(game !== undefined){
            setStock(game.stock)
        }
    },game)

    return (
        <div className="detailContainer">
            <h1 className="mb-3 sm:mb-6">Detalle del producto</h1>
            {stock > 1 
                ?< ItemDetail 
                    game={game}
                />
                : <p className="col-full spinner"><i className="fas fa-spinner"></i></p>
            }
        </div>
    )
}