import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/notfound.svg";
import usePageTitle from "../../Hooks/usePageTitle";

const NotFound = () => {
  usePageTitle("404");
  return (
    <div className="hero bg-base-200">
      <div className="hero-content max-w-6xl flex-col lg:flex-row">
        <img
          src={img}
          className=" md:max-w-none lg:max-w-md rounded-lg "
          alt=""
        />
        <div className="xs:text-center md:text-center lg:text-left">
          <h1 className="text-5xl font-bold text-rose-600">
            404 | Page Not Found
          </h1>
          <p className="py-6 max-w-md">
            <h2 className="text-2xl">
              Oops! We were unable to find what you were looking for.
            </h2>
            The page you have requested cannot be found. Error code: Page Not
            Found
          </p>
          <Link to="/">
            <button className="btn btn-primary">Go to the home page</button>
          </Link>
        </div>
      </div>
    </div>
    // <div className="hero  bg-base-200">
    //   <div className="hero-content text-center">
    //     <img src={img} className="max-w-lg" alt="" />
    //     <div className="max-w-md">
    //       <h1 className="text-5xl font-bold">404</h1>
    //       <p className="py-6">
    //         <h2 className="text-3xl">
    //           Oops! We were unable to find what you were looking for.
    //         </h2>
    //         The page you have requested cannot be found. Error code: Page Not
    //         Found
    //       </p>
    //       <Link to="/">
    //         <button className="btn btn-primary">Go to the home page</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NotFound;
