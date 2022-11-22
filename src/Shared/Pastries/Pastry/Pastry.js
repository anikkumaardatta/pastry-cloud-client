import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Pastry = ({ pastry }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <PhotoProvider>
            <PhotoView src={pastry.thumbnail}>
              <img src={pastry.thumbnail} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{pastry.title}</h2>
          <p className="text-gray-600">
            {pastry.description.slice(0, 80) + "..."}
          </p>
          <div className="card-actions justify-between mt-6">
            <p className="text-xl my-2 font-semibold text-rose-800">
              Price: {pastry.price}
            </p>
            <Link to={`/pastries/${pastry._id}`}>
              <button className="btn btn-primary">More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pastry;
