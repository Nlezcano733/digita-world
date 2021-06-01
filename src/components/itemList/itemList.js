import React from "react";
import { Item } from "./item/item";

export const ItemList = ({ item }) => {

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
