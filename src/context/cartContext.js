import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = props =>{
    const [products, setProducts] = useState([]);
    const [totalItems, setTotalItems] = useState()

    function addItems (product, quantity){
        let verif = false;
        products.forEach((item,)=>{
            if(item.id === product.id){
                return verif = true
            }
        })
        if(verif == false){
            setProducts([...products, {'id': product.id, 'name': product.title, 'price': product.price, 'id':product.id,'quantity': quantity}]);
        } else{
            let itemRepeated = products.find((item) => item.id === product.id);
            itemRepeated.quantity += quantity;
        }
    };

    function countItems () {
        let total = products.reduce((accum, item) => (accum += item.quantity), 0)
        setTotalItems(total)
    }

    function removeItems (id) {
        products.splice( products.findIndex((p) => p.id === id), 1);
        setProducts([...products]);
    }

    function clear (){
        setProducts([]);
    }
    
    return (
        <CartContext.Provider value={[products, addItems, countItems, removeItems, clear, totalItems]}>
        {props.children}
        </CartContext.Provider>
    );
}; 
