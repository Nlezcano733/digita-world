import React, { useEffect, useState, useContext  } from 'react';
import { Route, useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/index';

import { ItemDetail } from '../../components/itemDetail/itemDetail';
import { CartContext } from '../../context/cartContext';

import './itemDetailContainer.css';

export const ItemDetailContainer = () => {
    const gameParam = useParams();
    const [item, setItem] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    const [products, addItems, countItems, RemoveItems, clear] = useContext(CartContext)

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("item")
        itemCollection.get().then( querySnapshot =>{
            if(querySnapshot.size === 0){
            setIsEmpty(true)
            }
            const filterId = querySnapshot.docs.filter(game => game.id === gameParam.id)

            const id = filterId[0].id
            filterId.length !== 0 && setItem({...filterId[0].data(), id})
        }
        ).catch(err => console.log(err))
    }, [])

    return (
        <Route path="/products/:id">
            <div className="detailContainer">
                <h1 className="mb-3 sm:mb-6">Detalle del producto</h1>
                {isEmpty 
                    ? <p className="col-full spinner"><i class="fas fa-spinner"></i></p>
                    :< ItemDetail 
                        item={item}
                        addItems={addItems}
                    />
                }
            </div>
        </Route>
    )
}