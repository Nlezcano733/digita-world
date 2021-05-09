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
      {item.map(({title, price, picture, id}) => (
        <Item
          title={title}
          price={price}
          picture={picture}
          id={id}
        />
      ))}
    </div>
  );
};

