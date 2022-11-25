import React from "react";
import usePageTitle from "../../../Hooks/usePageTitle";
import Pastries from "../../../Shared/Pastries/Pastries/Pastries";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import MyPastries from "../MyPastries/MyPastries";
import Stat from "../Stat/Stat";

const Home = () => {
  usePageTitle("Home");
  return (
    <div className="max-w-6xl mx-auto">
      <Carousel></Carousel>
      <About></About>
      <MyPastries></MyPastries>
      <Stat></Stat>
    </div>
  );
};

export default Home;
