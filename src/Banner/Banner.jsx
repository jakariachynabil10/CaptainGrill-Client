import React from "react";
import './Banner.css';
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="lg:flex px-10 bg-liner text-black justify-between pt-5  lg:px-10 gap-5">
        <div>
          <h1 className="font-extrabold text-6xl mt-10">
            Welcome to{" "} <br></br>
            <span className="text-amber-500">Capital <span>Grilled</span></span>
          </h1>
          <p className="font-medium text-lg my-5">
            <small>
              The Capital Grille is a fine dining restaurant known for its dry
              aged steaks, award-winning wine list and professional service in
              an atmosphere of relaxed elegance.
            </small>
          </p>
          <Link
                to="/chef"
                className="border py-2 px-6  shadow-xl border-rose-400 bg-rose-400 text-white"
              >
                See The Chef Recipes
              </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
          className="h-[499px] py-4 rounded-2xl"
          alt=""
        />
      </div>
    </>
  );
};

export default Banner;
