import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = props =>{
    const [products, setProducts] = useState([]);

    function addItems (product, quantity){
        setProducts([...products, {'name': product, 'quantity': quantity}]);
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

    function isInCart (id){
        //completar funcion
    }

    return (
    <CartContext.Provider value={[products, addItems, countItems, removeItems, clear, isInCart]}>
      {props.children}
    </CartContext.Provider>
  );
}; 
