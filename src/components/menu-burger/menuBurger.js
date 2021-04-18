import React from 'react';

import './menuBurger.css';

export const MenuBurger = () => {

    const showMenu = () =>{
        let sidebar = document.querySelector('#sidebar__nav');
        let show = 'toggle-show';
        let hide = 'toggle-hide';

        sidebar.classList.remove(hide);
        sidebar.classList.add(show);
    }

    const hideMenu = () =>{
        let sidebar = document.querySelector('#sidebar__nav');
        let show = 'toggle-show';
        let hide = 'toggle-hide';

        sidebar.classList.remove(show);
        sidebar.classList.add(hide);
    }

    return (
        <div className="block sm:hidden text-white">
            <i className="fas fa-bars text-2xl px-2" id="sidebar" onClick={showMenu}></i>

            <div className="sidebar" id="sidebar__nav" >
                <i className="fas fa-times sidebar-exit" id="sidebar__exit" onClick={hideMenu}></i>
                <ul className=" sidebar-nav">
                    <li className="sidebar-links"><a href="">Home</a></li>
                    <li className="sidebar-links"><a href="">Nosotros</a></li>
                    <li className="sidebar-links"><a href="">Contacto</a></li>
                    <li className="sidebar-links "><a href="">Carrito</a></li>
                </ul>
            </div>

        </div>
    );
}