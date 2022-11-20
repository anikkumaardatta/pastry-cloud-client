import React from "react";

const Pastry = ({ pastry }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="" src={pastry.thumbnail} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{pastry.title}</h2>
        <p className="text-gray-600">
          {pastry.description.slice(0, 100) + "..."}
        </p>
        <div className="card-actions justify-between">
          <p className="text-xl my-2 font-semibold text-rose-800">
            Price: {pastry.price}
          </p>
          <button className="btn btn-primary">More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Pastry;
