import React from "react";

import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/navbar/banner/banner";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { Footer } from './components/footer/footer'

import "./assets/css/layout-index.css";

export const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Banner greeting="Los mejores juegos, todas las plataformas, un solo lugar." />
      <ItemListContainer/>
      <Footer />
    </div>
  );
};
