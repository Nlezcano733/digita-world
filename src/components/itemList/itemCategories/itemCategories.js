import React from "react";
import { Link } from 'react-router-dom';

export const ItemCategories = ({ categoryList }) => {
  return (
    <div className="container mt-10 mb-9">
      {categoryList.map((cat) => (
        <Link to={`./${cat}`} className="col-four category-link" id={`cat-${cat}`}>
            {cat === 'all'
                ? cat = 'Todos'
                : cat}
        </Link>
      ))}
    </div>
  );
};
