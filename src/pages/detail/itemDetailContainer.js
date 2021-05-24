import React, { useEffect, useState, useContext  } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetail } from '../../components/itemDetail/itemDetail';
import { CartContext } from '../../context/cartContext';
import { ProductContext } from '../../context/productContext';

import './itemDetailContainer.css';

export const ItemDetailContainer = () => {
    const gameParam = useParams();
    const [item, setItem] = useState([]);
    const [stock, setStock] = useState();
    const [products, addItems, countItems, RemoveItems, clear] = useContext(CartContext);
    const [data, getCategories, getGame, updateItems] = useContext(ProductContext);

    let game = getGame(gameParam);
    useEffect(()=>{
        if(game !== undefined){
            setItem(game);
            setStock(game.stock);
        }
    },game)

    return (
        <div className="detailContainer">
            <h1 className="mb-3 sm:mb-6">Detalle del producto</h1>
            {stock > 1 
                ?< ItemDetail 
                    item={item}
                    stock={stock}
                    setStock={setStock}
                    addItems={addItems}
                />
                : <p className="col-full spinner"><i className="fas fa-spinner"></i></p>
            }
        </div>
    )
}