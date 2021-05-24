import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";
import { Item } from "./item/item";

export const ItemList = ({ category }) => {
  const [data, getCategories, getGames, updateItems] = useContext(ProductContext);
  const [item, setItem] = useState([]);

  useEffect(()=>{
    category === "all"
      ? setItem(data)
      : setItem(data.filter(cat => cat.gender === category));
  }, data)

  return (
    <div className="container my-4 sm:mb-6">
      {item.length === 0 
      ? <p>Aguarde unos instantes...</p>
      : (
        item.map(({ title, price, picture, id }) => (
          <Item title={title} price={price} picture={picture} id={id} />
        ))
      )}
    </div>
  );
};
