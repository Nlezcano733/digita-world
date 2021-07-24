import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

export const Footer = () =>{
    return (
        <footer>
            <p className="footer-info">Desarrollado por Nlezcano - abril 2021</p>
            <div className="network">
                <a href={`https://github.com/Nlezcano733/eCommerce-Lezcano`}>
                    <i className="fab fa-github-alt"></i>
                </a>
                <a href={`https://www.linkedin.com/in/nlezcano/`}>
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </footer>
    )
} 