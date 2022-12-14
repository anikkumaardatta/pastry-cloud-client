import React, { useEffect, useState } from "react";
import usePageTitle from "../../../Hooks/usePageTitle";
import Pastry from "../Pastry/Pastry";

const Pastries = () => {
  const [pastries, setPastries] = useState([]);
  usePageTitle("Pastries");

  useEffect(() => {
    fetch("https://pastry-cloud-server.vercel.app/pastries")
      .then((res) => res.json())
      .then((data) => {
        setPastries(data);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-20">
      <h1 className="text-5xl font-bold text-center">Pastries </h1>
      <div className="m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {pastries.map((pastry) => (
          <Pastry key={pastry._id} pastry={pastry}></Pastry>
        ))}
      </div>
    </div>
  );
};

export default Pastries;
