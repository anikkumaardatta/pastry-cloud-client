import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pastry from "../../../Shared/Pastries/Pastry/Pastry";

const MyPastries = () => {
  const [pastries, setPastries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pastries/3")
      .then((res) => res.json())
      .then((data) => {
        setPastries(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-12">My Pastries </h1>
      <div className="m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {pastries.map((pastry) => (
          <Pastry key={pastry._id} pastry={pastry}></Pastry>
        ))}
      </div>
      <div className="block text-center mt-6 mb-20">
        <Link to="pastries" className="btn btn-primary">
          See All Pastries
        </Link>
      </div>
    </div>
  );
};

export default MyPastries;
