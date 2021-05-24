import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { getFirestore } from '../firebase/index';

export const ProductContext = React.createContext([]);

export const ProductProvider = props =>{
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("item")
        itemCollection.get().then( querySnapshot =>{
            let data = querySnapshot.docs.map(game => ({...game.data(), "id": game.id}));
            setData(data);
        }
        ).catch(err => console.log(err));
    }, [])

    function getCategories () {
        let gender = data.map(item => item.gender);
        gender.forEach(item => !categories.includes(item) && setCategories([...categories, item]));
        return categories
    }

    function getGame ({id}){
        let game = data.filter(item => item.id === id);
        return game[0];
    }

    async function updateItems (items){
        console.log(items)
        const db = getFirestore();
        const itemsToUpdate = db.collection('item')
            .where(firebase.firestore.FieldPath.documentId(), 'in', items.map(i => i.id));

        const query = await itemsToUpdate.get();
        const batch = db.batch();

        const outOfStock = [];
        query.docs.forEach((docSnapshot, idx)=>{
            if(docSnapshot.data().stock >= items[idx].quantity){
                batch.update(docSnapshot.ref, {stock: docSnapshot.data().stock - items[idx].quantity});
            } else{
                outOfStock.push({...docSnapshot.data(), id:docSnapshot.id});
            }
        })

        if(outOfStock.length === 0){
            await batch.commit();
        }
    }

    return (
        <ProductContext.Provider value={[data, getCategories, getGame, updateItems]}>
        {props.children}
        </ProductContext.Provider>
    );
};