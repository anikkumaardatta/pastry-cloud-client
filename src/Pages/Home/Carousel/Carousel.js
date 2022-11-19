import React from "react";
import img1 from "../../../assets/banner/b1.jpg";
import img2 from "../../../assets/banner/b2.jpg";
import img3 from "../../../assets/banner/b3.jpg";
import CarouselItem from "./CarouselItem";

const carouselItemData = [
  {
    id: 1,
    thumbnail: img1,
    title: "Pastry cup cake's",
  },
  {
    id: 2,
    thumbnail: img2,
    title: "Fruit desserts",
  },
  {
    id: 3,
    thumbnail: img3,
    title: "Fruit puddings",
  },
];

const Carousel = () => {
  return (
    <div className=" mt-3 carousel carousel-center max-w-6xl mx-auto p-4 space-x-4 bg-pink-200 rounded-box">
      {carouselItemData.map((carouselItem) => (
        <CarouselItem
          key={carouselItem.id}
          carouselItem={carouselItem}
        ></CarouselItem>
      ))}
    </div>
  );
};

export default Carousel;
