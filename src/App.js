import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import { NavBar } from "./components/navbar/NavBar";
import { Home } from './pages/home/home';
import { ItemDetailContainer } from './pages/detail/itemDetailContainer';
import { Footer } from './components/footer/footer'

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/:id">
          < ItemDetailContainer />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
};
