import React from 'react';

import './banner.css';

export const Banner = (props) => {
    return (
        <div className="banner">
            <p className="description">{props.greeting}</p>
        </div>
    );
}

