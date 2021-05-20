import React, { useEffect, useState, useContext  } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/index';

import { ItemDetail } from '../../components/itemDetail/itemDetail';
import { CartContext } from '../../context/cartContext';

import './itemDetailContainer.css';

export const ItemDetailContainer = () => {
    const gameParam = useParams();
    const [item, setItem] = useState([]);
    const [stock, setStock] = useState();

    console.log(gameParam)

    const [products, addItems, countItems, RemoveItems, clear] = useContext(CartContext)

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("item")
        itemCollection.get().then( querySnapshot =>{
            let filterId = querySnapshot.docs.filter(game => game.id === gameParam.id)
            filterId = filterId[0];

            const id = filterId.id
            filterId.length !== 0 && setItem({...filterId.data(), id})
            setStock(filterId.data().stock)
        }
        ).catch(err => console.log(err))
    }, [])


    return (
        <div className="detailContainer">
            <h1 className="mb-3 sm:mb-6">Detalle del producto</h1>
            {stock === undefined 
                ? <p className="col-full spinner"><i class="fas fa-spinner"></i></p>
                :< ItemDetail 
                    item={item}
                    stock={stock}
                    setStock={setStock}
                    addItems={addItems}
                />
            }
        </div>
    )
}