import React from "react";

import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/banner/banner";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { Footer } from './components/footer/footer'

import "./assets/css/layout-index.css";

export const App = () => {
  const theme = () => {
    if ( localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  localStorage.theme = "light";
  theme()
  
  return (
    <div className="app">
      <NavBar />
      <Banner greeting="Los mejores juegos, todas las plataformas, un solo lugar." />
      <ItemListContainer/>
      <Footer />
    </div>
  );
};
