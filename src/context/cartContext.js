import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = props =>{
    const [products, setProducts] = useState([]);

    function addItems (product, quantity){
        let verif = false;
        products.forEach((item,)=>{
            if(item.id === product.id){
                return verif = true
            }
        })
        if(verif == false){
            setProducts([...products, {'name': product.title, 'price': product.price, 'id':product.id,'quantity': quantity}]);
        } else{
            let itemRepeated = products.find((item) => item.id === product.id);
            itemRepeated.quantity += quantity;
        }
    };

    

    function countItems (accum) {
        return products.reduce((accum, item) => (accum += item.quantity), 0)
    }

    function removeItems (id) {
        products.splice( products.findIndex((p) => p.id === id), 1);
        setProducts([...products]);
    }

    function clear (){
        setProducts([]);
    }
    
    return (
    <CartContext.Provider value={[products, addItems, countItems, removeItems, clear]}>
      {props.children}
    </CartContext.Provider>
  );
}; 
