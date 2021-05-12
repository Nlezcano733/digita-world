import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { MenuBurger } from './menu-burger/menuBurger'
import { CartContext } from '../../context/cartContext';
import './navbar.css';

export const NavBar = () => {
    const [products, addItems, countItems, RemoveItems, clear, isInCart] = useContext(CartContext)

    return (
        <div className="sticky top-0 nav">
            <h1 className=" nav-logo">
                <Link to='/'>Digital World</Link>
            </h1>
            <div>
                < MenuBurger />
                <nav className="nav-menu">
                    <a className=" nav-enlace " href="">Contacto</a>
                    <Link to={`/cart`} className="nav-enlace">
                        <i className="fas fa-shopping-cart text-2xl mr-2"></i>
                        {products.length > 0
                            ?<p className="inline-block">{`(${countItems()})`}</p>
                            :<></>
                        }
                    </Link>
                </nav>
            </div>
        </div>
    )
}
