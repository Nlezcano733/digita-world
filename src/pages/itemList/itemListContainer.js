import React from 'react';
import { useParams } from 'react-router';
import { ItemList } from '../../components/itemList/itemList';
import './itemListContainer.css';

export const ItemListContainer = () =>{
    let param = useParams();
    const category = param.category

    return (
        <div className="itemContainer">
            <div>
                <h2 className="itemContainer-title">
                    Busca tus juegos favoritos: {category === 'all' ? 'todos' :category}
                </h2>
            </div>
            < ItemList category={category}/>
        </div>
    )
}