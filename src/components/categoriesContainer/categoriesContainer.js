import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/productContext';

import './categoriesContainer.css';

export const CategoriesContainer = () =>{
    const [data, item, getCategories, getList, getGame, updateItems] = useContext(ProductContext)
    let categoryName = getCategories();
    
    return (
        <div className="category container gap-y-3">
            <h2 className="col-full text-2xl text-center">Categorias</h2>
            {categoryName !== undefined
                ? categoryName.map(item => (
                    <Link 
                        to={`/products/${item}`} 
                        className="category-link col-four" 
                        id={`cat-${item}`}
                        onClick={()=>{getList(item)}}
                    > 
                        {item}
                    </Link>
                ))
                :<p className="col-full">Aguarde unos segundos</p>
            }
        </div>
    )
}