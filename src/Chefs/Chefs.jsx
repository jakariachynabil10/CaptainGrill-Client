import React, { useContext, useEffect, useState } from "react";
import ChefsCard from "../ChefsCard/ChefsCard";
import { useNavigation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Chefs = () => {
  const {loading} = useContext(AuthContext)
  if (loading) {
    return <div className="radial-progress" style={{"--value":70}}>70%</div>
  }
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    const load = async () => {
      const res = await fetch("https://assaigment10-server.vercel.app/chefs");
      const data = await res.json();
      console.log(data);
      setChefs(data);
    };
    load();
  }, []);
  return (
    <>
    <h1 className="text-center font-extrabold text-3xl mt-28">Chef Details</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 lg:mx-5 mt-28">
        {chefs?.map((chef) => (
          <ChefsCard key={chef.id} chef={chef}></ChefsCard>
        ))}
      </div>
    </>
  );
};

export default Chefs;
