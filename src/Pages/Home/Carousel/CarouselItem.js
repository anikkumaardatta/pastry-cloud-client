import React from "react";
import "./CarouselItem.css";

const CarouselItem = ({ carouselItem }) => {
  return (
    <div className="carousel-item relative ">
      <div className="carousel-img">
        <img src={carouselItem.thumbnail} className="rounded-box" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 top-1/2">
        <div className="hero">
          <div className="hero-content">
            <div className="max-w-md text-white">
              <h1 className="sm:text-5xl font-semibold">
                {carouselItem.title}
              </h1>
              <p className="py-6"></p>
              <button className="btn btn-error">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
