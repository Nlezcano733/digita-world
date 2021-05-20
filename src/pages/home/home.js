import React from 'react';
import { Banner } from "../../components/banner/banner";
import { CategoriesContainer } from '../../components/categoriesContainer/categoriesContainer'

import './home.css';

export const Home = () =>{
    return (
        <div className="home">
        <Banner greeting="Los mejores juegos, todas las plataformas, un solo lugar." />
        <CategoriesContainer />
        </div>
    );
}