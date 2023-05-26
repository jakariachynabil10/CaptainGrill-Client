import React from "react";
import Banner from "../Banner/Banner";
import Chefs from "../Chefs/Chefs";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Banner></Banner>
        <Chefs></Chefs>
      </div>
      <section>
        {/* Work with Us */}
        <h2 className="font-extrabold text-center mt-20 text-4xl mb-10">Our Restaurant</h2>
        <div className="lg:flex justify-center items-center gap-4 mx-10">
            <div className="border hover:transform  hover:scale-110 transition duration-300 w-full h-fit text-center border-white rounded-lg bg-white shadow-lg p-7">
               <h1 className=" font-bold text-2xl">The Best Restaurant You ever Seen</h1>
               <p className="pt-4">Search The Google and You can see that Our Restaurant has a amazing degine and has a amazing food </p>
               <button className="mt-4 px-7 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white border">Check Out Now</button>
            </div>
            <div className="border hover:transform  hover:scale-110 transition duration-300 w-full h-fit text-center border-white rounded-lg bg-white shadow-lg p-4">
               <h1 className="text-center font-bold text-2xl">We Have the Greatest Chefs in Our Restaurant</h1>
               <p className="pt-4">Our Restaurant Has the best chefs around the world and they create the most master class food in the world . come to our Restaurant to see the master class recipes.</p>
              <Link to='/chef'> <button className="mt-4 px-7 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white border">Check Out Now</button></Link>
            </div>
            <div className="border hover:transform  hover:scale-110 transition duration-300 w-full h-fit text-center border-white rounded-lg bg-white shadow-lg p-4">
               <h1 className="text-center font-bold text-2xl">Discount Every week 40% and Every Month </h1>
               <p className="pt-4">You can get Discount offer every weeks and every month. Everybody can Access this Discount offer. So what are You waiting for get the offer and enjoy your food</p>
               <button className="mt-4 px-7 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white border">Check Out Now</button>
            </div>

        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left items-center lg:mx-32 gap-4 mt-20">
        {/* Lets Make SOmethin Great Together */}
       <div>
       <h1 className="font-bold text-4xl  mx-5">Want To Join Our Restaurant Has a Chef ?</h1>
       <p className="text-gray-400 lg:pl-5 pt-5">Are you a cooking lover. Do you want to become a master chef . So what are you waiting for click to the Apply Now and Give a trail.</p>
       <button className="mt-4 px-7 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white  lg:ml-4 border">Apply Now</button>
       </div>
       <img src="https://images.unsplash.com/photo-1556908153-1055164fe2df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" className="w-[400px] rounded-xl h-[400px]" alt="" />
      </section>
    </>
  );
};

export default Home;
