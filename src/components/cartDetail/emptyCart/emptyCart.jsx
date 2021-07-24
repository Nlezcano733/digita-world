import React from 'react';
import { Link } from 'react-router-dom';

import './emptyCart.css';

export const EmptyCart = () => {
    return(
        <div className="empty-message">
            <h2 className="empty-title"><i className="fas fa-exclamation-triangle"></i> Usted no posee elementos en el carrito</h2>
            <Link to={`/products/all`} className="empty-link">Visitá nuesto catálogo</Link>
        </div>
    )
}