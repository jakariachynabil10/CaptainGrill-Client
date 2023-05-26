import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import swal from "sweetalert";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ChefSingleRecipe = ({ recipe }) => {
  const [isDisable , setDisable] = useState(false)
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    short_bio,
  } = recipe;

  const handleFavoriteBtn = ()=>{
    setDisable(true)
       swal({
        title: "YAY!",
        text: "This Item is Now Your Favorite!",
        icon: "success",
        button: "Aww yiss!",
      });
      return
  }
  return (
    <>
      <div className="lg:flex items-center justify-center px-16 lg:px-32 gap-4 bg-gradient-to-b from-pink-200 to-purple-400">
        <img className="h-[300px] p-5 rounded-lg" src={chef_picture} alt="" />
        <div className="text-black">
          <h1 className="font-bold text-xl pt-2">Name : {chef_name}</h1>
          <p className="pt-2">
            Years of Experience : {years_of_experience} years
          </p>
          <p className="pt-2">Number of Recipes : {number_of_recipes}</p>
          <p className="pt-2">Likes : 9500</p>
          <p className="pt-2">Description : {short_bio}</p>
        </div>
      </div>

      <section  className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5 mt-10">
        {recipe.recipes.map((r) => {
            const {cooking_method, ingredients, rating, recipe_name } = r
          return (
            <>
              <div className="card hover:transform  hover:scale-110 transition duration-300 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{recipe_name}</h2>
                  <p><span className="font-medium">Ingredients</span>: <li>{ingredients}</li></p>
                  <p><span className="font-medium">Cooking Method</span>: {cooking_method}</p>
                  <div className="card-actions absolute top-0 right-0">
                    <button name="button" onClick={handleFavoriteBtn}  className={`px-5 py-2 rounded-lg shadow-lg ${
                        isDisable ? "bg-gray-400 cursor-not-allowed" : ""
                      }`}
                      disabled={isDisable}><FaBookmark></FaBookmark></button>
                  </div>
                </div>
                <hr />
                <div className="flex items-center gap-2">
                <Rating style={{ maxWidth: 200 }} value={rating} readOnly />
                {rating}
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ChefSingleRecipe;
