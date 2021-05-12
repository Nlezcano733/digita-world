import React, { useEffect, useState } from 'react';
import { ItemRecomendation } from './itemRecomendation/itemRecomendation';

import data from '../../products.json';


export const RecomendationContainer = ({title, gender}) =>{

    const [gameGender, setGameGender] = useState();

    const filterGames = () =>{
        return new Promise ((response) =>{
            setTimeout(() =>{
                return response(data);
            },500);
        });
    }

    useEffect(()=>{
        filterGames(gameGender).then(result =>{
            if(gameGender === undefined){
                let game = result.filter(items => items.gender == gender && items.title !== title)
                game.length !== 0 && setGameGender(game);
            }}, gameGender)
        }
    )

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