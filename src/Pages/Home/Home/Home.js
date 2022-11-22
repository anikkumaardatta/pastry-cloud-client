import React from "react";
import Pastries from "../../../Shared/Pastries/Pastries/Pastries";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import MyPastries from "../MyPastries/MyPastries";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel></Carousel>
      <About></About>
      <MyPastries></MyPastries>
    </div>
  );
};

export default Home;
