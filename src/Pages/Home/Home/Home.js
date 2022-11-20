import React from "react";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import Pastrys from "../Pastrys/Pastrys";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel></Carousel>
      <About></About>
      <Pastrys></Pastrys>
    </div>
  );
};

export default Home;
