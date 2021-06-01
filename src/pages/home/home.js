import React from 'react';
import { CategoriesContainer } from '../../components/categoriesContainer/categoriesContainer'

import './home.css';

export const Home = () =>{
    return (
        <div className="home">
        <div className="banner">
            <p className="description">
                Los mejores juegos, todas las plataformas, un solo lugar.
            </p>
        </div>
        <CategoriesContainer />
        </div>
    );
}