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
            <div>
                < MenuBurger />
                <nav className="nav-menu">
                    <a className=" nav-enlace " href="">Nosotros</a>
                    <a className=" nav-enlace " href="">Contacto</a>
                    < CartWidget />
                </nav>
            </div>
        </div>
    )
}
