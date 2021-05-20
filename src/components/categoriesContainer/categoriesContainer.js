import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext} from '../../context/productContext';

import './categoriesContainer.css';

export const CategoriesContainer = () =>{
    const categories = useContext(ProductContext)

    let catName = categories.map(name=>{
        let catAlt = name.charAt(0);
        return `${catAlt.toUpperCase()}${name.slice(1)}`;
    })
    
    return (
        <div className="category container">
            <h2 className="col-full text-2xl text-center">Categorias</h2>
            {categories.length > 1
                ? catName.map(item => (
                    <Link className="category-link col-four"to={`/products/${item.toLocaleLowerCase()}`}>
                        {item}
                    </Link>
                ))
                :<p>Aguarde unos segundos</p>
            }
        </div>
    )
}