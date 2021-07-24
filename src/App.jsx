import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartProvider } from "./context/cartContext"; 
import { ProductProvider } from "./context/productContext"; 

import { NavBar } from "./components/navbar/NavBar";
import { Home } from './pages/home/home';
import { ItemDetailContainer } from './pages/detail/itemDetailContainer';
import { ItemListContainer } from "./pages/itemList/itemListContainer";
import { CartContainer } from './pages/cart/cartContainer'; 
import { Footer } from './components/footer/footer';

import './app.css';

export const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/products/:category">
              <ItemListContainer/>
            </Route>

            <Route path="/detail/:id">
              <ItemDetailContainer/>
            </Route>

            <Route path="/cart">
              <CartContainer/>
            </Route>

          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  )
};
