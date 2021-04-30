import { useState } from 'react';
import { ItemDetailContainer } from '../itemDetailContainer/itemDetailContainer'; 

import './item.css';

export const Item = (props) => {

  const [display, SetDisplay] = useState('hidden');
  const [idGame, setIdGame] = useState('');

  const handleClick = (id) => {
    SetDisplay('detailContainer');
    setIdGame(id);
  }

  return (
    <div className="card col-four">
        <div className="img-container">
            <img src={props.picture} className="img-cover" />
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="price">{props.price}</p>
        <input className="py-2 bg-gray-200" type="button" value="Ver más" onClick={()=>{handleClick (props.id)}}/>

        < ItemDetailContainer
          state={display}
          id={idGame}
        />

    </div>
  );
};
