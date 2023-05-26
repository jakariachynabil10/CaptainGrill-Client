import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChefsCard = ({ chef }) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
  } = chef;
  return (
    <>
      <div className="card hover:transform  hover:scale-110 transition duration-300 w-full shadow-xl">
        <figure>
          {/* <img src={chef_picture} className="h-[450px]" alt="Shoes" /> */}
          <LazyLoadImage src={chef_picture} className="h-[450px]"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chef_name}</h2>
          <p>Years of Experience : {years_of_experience}</p>
          <p>Number of Recipes : {number_of_recipes}</p>
          <p>Likes : 9500</p>
          <div className="card-actions justify-end">
            <Link to={`/chef/${id}`}>
              <button className="border px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white">
                View Recipe
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefsCard;
