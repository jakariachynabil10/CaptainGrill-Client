import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mx-2 mt-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Capital Grilled</h3>
            <ul>
              <li>
                <Link className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Products</h3>
            <ul>
              <li>
                <Link className="hover:underline">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link className="hover:underline">
                  Catering
                </Link>
              </li>
              <li>
                <Link className="hover:underline">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <p className="mb-4">
             Bangladesh , Sylhet
            </p>
            <p className="mb-4">012301245</p>
            <Link className="hover:underline">
              Email Us : jakariachynabil@gmail.com
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
            <ul  className="flex items-center gap-4">
              <li>
                <Link to='https://www.facebook.com/profile.php?id=100077571240039' className="hover:underline">
                  <FaFacebook></FaFacebook>
                </Link>
              </li>
              <li>
                <Link className="hover:underline">
                  <FaTwitter></FaTwitter>
                </Link>
              </li>
              <li>
                <Link className="hover:underline">
                 <FaInstagramSquare></FaInstagramSquare>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center pt-4">CopyRight @ 2023</p>
    </footer>
  );
};

export default Footer;
