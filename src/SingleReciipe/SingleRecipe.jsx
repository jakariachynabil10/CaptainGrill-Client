import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefSingleRecipe from './ChefSingleRecipe';

const SingleRecipe = () => {
    const recipeLoader = useLoaderData()
    return (
       <>
      {
        recipeLoader.map(recipe => <ChefSingleRecipe key={recipe.id} recipe={recipe}></ChefSingleRecipe>)
      }
       </>
    );
};

export default SingleRecipe;