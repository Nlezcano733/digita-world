import React, { useContext, useEffect, useState } from 'react';
import { ItemRecomendation } from './itemRecomendation/itemRecomendation';
import { ProductContext } from '../../context/productContext';


export const RecomendationContainer = ({title, gender}) =>{
    const [data, getCategories, getGames] = useContext(ProductContext);
    const [gameGender, setGameGender] = useState();

    const filterRecomendation = data.filter(items => items.gender === gender && items.title != title)

    useEffect(()=>{
        filterRecomendation != 0 && setGameGender(filterRecomendation)
    }, filterRecomendation)

    return (
        <div className="col-full lg:col-4 h-52 lg:h-full bg-gray-100 p-2">
            <h2 className="font-semibold text-center mt-2">Quizas pueda interesante</h2>
            {gameGender !== undefined 
                && gameGender.map(({title, picture, id})=>(
                    <ItemRecomendation 
                        title={title}
                        picture={picture}
                        id={id}
                    />
                ))
            }
        </div>
    )
}