import React from 'react';

const RecipeInfo = ({recipes}) => {
    //console.log(recipe)
    return (
        <div>
          {recipes.map((recipe, index) => { 
            return (
              <div className="recipeInfo">
                <img src={recipe.recipe.image} alt= "picture"/>
                <h3>{recipe.recipe.label}</h3>
                <p>{Math.round(recipe.recipe.calories)} calories</p>
                <p>ingredients:{(recipe.recipe.ingredientLines.map((indgredient)=>
                <li>{indgredient}</li>
                ))}</p>
                <p><a href={recipe.recipe.url}>{recipe.recipe.source}</a></p>
              </div>
            );
          })}
        </div>
      );
};

export default RecipeInfo;