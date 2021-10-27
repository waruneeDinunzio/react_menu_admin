import React from 'react';

const Categories = ({ categories, filterFoods }) => {
  
  return (
    <div className="btn-container">
      {categories[0].map((category, index) => {
        //console.log(categories)
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterFoods(category)}
          >
            {category}
          </button>
        );
      })} 
    </div>
  );
};

export default Categories;