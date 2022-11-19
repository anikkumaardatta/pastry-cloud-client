import React from "react";
import aboutJPG from "../../../../assets/images/about.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={aboutJPG} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="sm:w-full lg:w-96">
          <h1 className="text-5xl font-bold">About us</h1>
          <p className="py-6">
            A pastry cake is a cake made with flour, sugar, butter, eggs, and
            baking powder or soda. The dough is rolled out and then cut into
            shapes, which are then baked.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
