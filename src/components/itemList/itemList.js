import React, { useEffect, useState } from "react";
import { Item } from "./item/item";

export const ItemList = ({ category, data }) => {
  const [item, setItem] = useState([]);

  useEffect(()=>{
    category !== "all"
    ? setItem(data.filter(cat => cat.gender === category))
    : setItem(data);
  }, [])

  return (
    <div className="container my-4 sm:mb-6">
      {item.length === 0 ? (
        <p className="col-full">Aguarde unos instantes...</p>
      ) : (
        item.map(({ title, price, picture, id }) => (
          <Item title={title} price={price} picture={picture} id={id} />
        ))
      )}
    </div>
  );
};
