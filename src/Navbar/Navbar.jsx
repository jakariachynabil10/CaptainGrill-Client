import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  let location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-pink-400 font-bold" : "";
  };

  const handleLogOut = () => {
    logOut()
      .then((out) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="navbar shadow-md ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60"
          >
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </div>

            <div className="lg:flex items-center lg:ml-20 gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/chef">Chef</Link>
              </li>
              <li>
                <Link to="/blog">BLog</Link>
              </li>
            </div>
            <div className="my-4">
              {user ? (
                <>
                  <span className="text-black flex gap-4 items-center">
                    <button
                      className="border rounded-2xl py-2 px-6  shadow-xl border-rose-400 bg-rose-400 text-white"
                      onClick={handleLogOut}
                    >
                      Sign Out
                    </button>
                  </span>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="border rounded-2xl py-2 px-6  shadow-xl border-rose-400 bg-rose-400 text-white"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case font-bold text-2xl text-black"
        >
          Capital Grill
        </Link>
        <div className="lg:ml-32 hidden lg:flex">
          <ul className="flex items-center gap-4 text-black  pr-10 px-1">
            <div className="relative">
              <div className="absolute inset-y-0  flex items-center px-2">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-400"
                />
              </div>
              <input
                type="text"
                placeholder="Search your Favorite Food"
                className="px-6 py-2 rounded-lg outline-none w-auto lg:w-[400px] text-black"
              />
            </div>
            <div className="lg:flex items-center ml-10 gap-5">
              <li>
                <Link to="/" className={isActive("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chef" className={isActive("/chef")}>
                  Chef
                </Link>
              </li>
              <li>
                <Link to="/blog" className={isActive("/blog")}>
                  BLog
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span className="text-black flex gap-4 items-center">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL}  title={user?.displayName} />
                  </div>
                </label>
                <button
                  className="border hidden lg:block rounded-2xl py-2 px-6  shadow-xl border-rose-400 bg-rose-400 text-white"
                  onClick={handleLogOut}
                >
                  Sign Out
                </button>
              </span>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border hidden lg:block rounded-2xl py-2 px-6  shadow-xl border-rose-400 bg-rose-400 text-white"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
