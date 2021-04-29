import { Item } from "../item/item";
import data from "../../../products.json";
import { useEffect, useState } from "react";

export const ItemList = () => {
  const [item, setItem] = useState([]);

  const getGames = (data) => {
    return new Promise((res) => {
      setTimeout(() => {
        return res(data);
      }, 2000);
    });
  };

  useEffect(() => {
    getGames(data).then((result) => {
      setItem(result);
    });
  }, []);

  return (
    <div className="container my-4 sm:mb-6">
      {item.map((product) => (
        <Item
          title={product.title}
          price={product.price}
          picture={product.picture}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

