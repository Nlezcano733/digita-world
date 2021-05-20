import { Item } from "../item/item";
import { useEffect, useState } from "react";
import { getFirestore } from '../../../firebase/index';

export const ItemList = ({category}) => {
  const [item, setItem] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(()=>{
    const db = getFirestore();
    const itemCollection = db.collection("item")
    itemCollection.get().then( querySnapshot =>{
        if(querySnapshot.size === 0){
          setIsEmpty(true)
        }

        const data = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
        category === 'all'
          ?setItem(data)
          :setItem(data.filter(cat => cat.gender === category))
      }
    ).catch(err => console.log(err))
  }, [])
  return (
    <div className="container my-4 sm:mb-6">
      { isEmpty ?
      ( <p>Aguarde unos instantes...</p>
      ):(item.map(({title, price, picture, id}) => (
        <Item
          title={title}
          price={price}
          picture={picture}
          id={id}
        />
      ))
      )}
    </div>
  );
};

