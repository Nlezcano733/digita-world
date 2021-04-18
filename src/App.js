import React from 'react';

import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/banner';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';

import './assets/css/layout-index.css';

export const App = () => {
    return (
        <div>
            < NavBar />
            < Banner
                greeting = "Los mejores juegos, todas las plataformas, un solo lugar."
             />
            < ItemListContainer 
                title = "Tarjeta de producto"
            />
        </div>
    );
}
