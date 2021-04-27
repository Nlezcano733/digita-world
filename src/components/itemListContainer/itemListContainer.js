import React from 'react';
import { ItemList } from '../itemList/itemList';
import './itemListContainer.css';

export const ItemListContainer = () =>{
    return (
        <div className="item-container">
            <h2 className="item-container__title">Busca tus juegos favoritos</h2>
            < ItemList />
        </div>
    )
}