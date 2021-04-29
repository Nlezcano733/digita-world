import React from 'react';
import {useRef} from 'react';

import './menuBurger.css';

export const MenuBurger = () => {
        let show = 'toggle-show';
        let hide = 'toggle-hide';
        const sidebar = useRef()

    const handleCLick = ({type}) =>{
        if(type == "open"){
            sidebar.current.className = `sidebar ${show}`
        }
        if(type == "close"){
            sidebar.current.className = `sidebar ${hide}`
        }
    }

    return (
        <div className="block md:hidden text-white">
            <i className="fas fa-bars text-2xl px-2" id="sidebar" onClick={() => {handleCLick({type: 'open'})}}></i>

            <div className="sidebar" ref={sidebar} >
                <i className="fas fa-times sidebar-exit" id="sidebar__exit" onClick={() => {handleCLick({type: 'close'})}}></i>
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