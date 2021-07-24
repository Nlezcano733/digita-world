import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { ProductContext } from "../../context/productContext";
import { ItemList } from '../../components/itemList/itemList';
import { ItemCategories } from '../../components/itemList/itemCategories/itemCategories';
import './itemListContainer.css';

export const ItemListContainer = () =>{
    let {category} = useParams();
    const [data, item, getCategories, getList, getGame, updateItems] = useContext(ProductContext);
    
    let categoryList = getCategories();
    if(category !== 'all'){
        let catFilter = categoryList.filter(itemCat => itemCat !== category);
        categoryList = ['all', ...catFilter]
    }

    return (
        <div className="itemContainer">
            <div>
                <h2 className="itemContainer-title">
                    Busca tus juegos favoritos: {category === 'all' ? 'todos' :category}
                </h2>
            </div>
            < ItemList
                item={item}
            />
            <ItemCategories 
                getList={getList}
                categoryList={categoryList}
            />
        </div>
    )
}