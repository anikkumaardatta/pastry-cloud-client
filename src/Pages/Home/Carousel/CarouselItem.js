import React from "react";
import { Link } from "react-router-dom";
import "./CarouselItem.css";

const CarouselItem = ({ carouselItem }) => {
  return (
    <div className="carousel-item relative ">
      <div className="carousel-img">
        <img src={carouselItem.thumbnail} className="rounded-box" />
      </div>
      <div className="hero absolute flex justify-center transform -translate-y-1/2  top-1/2">
        <div className="hero-content text-center">
          <div className="max-w-md text-white">
            <h1 className="text-5xl max-w-xs font-semibold">
              {carouselItem.title}
            </h1>
            <p className="py-6"></p>

            <Link to="/pastries">
              <button className="btn btn-error">All Pastries</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
