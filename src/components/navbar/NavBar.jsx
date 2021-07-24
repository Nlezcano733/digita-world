import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { ProductContext } from "../../context/productContext";
import "./navbar.css";

export const NavBar = () => {
  const [products, addItems, countItems, RemoveItems, clear, totalItems] = useContext(CartContext);
  const [data, item, getCategories, getList, getGame, updateItems] = useContext(ProductContext);
  countItems();

  return (
    <header className="sticky top-0 nav">
      <h1 className=" nav-logo">
        <Link to="/">Digital World</Link>
      </h1>
      <nav className="nav-menu">
        <Link to={`/products/all`} className="nav-enlace" 
          onClick={() => { 
          getList("all"); 
        }}>
          Catálogo
        </Link>
        <Link to={`/cart`} className="nav-enlace">
          <i className="fas fa-shopping-cart text-2xl mr-2"></i>
          {products.length > 0 ? <p className="inline-block">{`(${totalItems})`}</p> : <></>}
        </Link>
      </nav>
    </header>
  );
};
