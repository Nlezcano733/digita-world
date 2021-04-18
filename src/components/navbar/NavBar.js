import React from 'react';
import { CartWidget } from '../cartWidget/cartWidget';
import { MenuBurger } from '../menu-burger/menuBurger'
import './navbar.css';

export const NavBar = () => {
    return (
        <div className="sticky top-0 nav">
            <h1 className=" nav-logo">
                Digital World
            </h1>
            <nav>
                < MenuBurger />
                <ul className="nav-menu">
                    <li className=" nav-enlace "><a href="">Nosotros</a></li>
                    <li className=" nav-enlace "><a href="">Contacto</a></li>
                    < CartWidget />
                </ul>
            </nav>
        </div>
    )
}
