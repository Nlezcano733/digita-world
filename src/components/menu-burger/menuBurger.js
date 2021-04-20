import React from 'react';

import './menuBurger.css';

export const MenuBurger = () => {
        let show = 'toggle-show';
        let hide = 'toggle-hide';

    const showMenu = () =>{
        let sidebar = document.querySelector('#sidebar__nav');

        sidebar.classList.remove(hide);
        sidebar.classList.add(show);
    }

    const hideMenu = () =>{
        let sidebar = document.querySelector('#sidebar__nav');

        sidebar.classList.remove(show);
        sidebar.classList.add(hide);
    }

    return (
        <div className="block md:hidden text-white">
            <i className="fas fa-bars text-2xl px-2" id="sidebar" onClick={showMenu}></i>

            <div className="sidebar" id="sidebar__nav" >
                <i className="fas fa-times sidebar-exit" id="sidebar__exit" onClick={hideMenu}></i>
                <nav className=" sidebar-nav">
                    <a className="sidebar-links" href="">Home</a>
                    <a className="sidebar-links" href="">Nosotros</a>
                    <a className="sidebar-links" href="">Contacto</a>
                    <a className="sidebar-links" href="">Carrito</a>
                </nav>
            </div>

        </div>
    );
}