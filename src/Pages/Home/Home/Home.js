import React from "react";
import About from "../Carousel/About/About";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel></Carousel>
      <About></About>
    </div>
  );
};

export default Home;
