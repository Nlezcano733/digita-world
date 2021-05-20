import React, { useState, useEffect } from 'react';
import { getFirestore } from '../firebase/index';

export const ProductContext = React.createContext([]);

export const ProductProvider = props =>{
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("item")
        itemCollection.get().then( querySnapshot =>{
            let gender = querySnapshot.docs.map(game => game.data().gender)
            setCategories(gender)
        }
        ).catch(err => console.log(err))
    }, [])

    return (
        <ProductContext.Provider value={categories}>
        {props.children}
        </ProductContext.Provider>
    );
};