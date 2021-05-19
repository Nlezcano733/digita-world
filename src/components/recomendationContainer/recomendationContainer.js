import React, { useEffect, useState } from 'react';
import { ItemRecomendation } from './itemRecomendation/itemRecomendation';
import { getFirestore } from '../../firebase/index';


export const RecomendationContainer = ({title, gender}) =>{

    const [gameGender, setGameGender] = useState();

    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("item");
        itemCollection.get().then(querySnapshot =>{
            const filterGame = querySnapshot.docs.filter(items => items.data().gender === gender && items.data().title != title);
            let gamesData = filterGame.map((item) => ({...item.data(), id: item.id}))
            filterGame.length !== 0 && setGameGender(gamesData);
        })
    })

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