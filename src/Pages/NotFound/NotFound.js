import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">
            <h2 className="text-3xl">
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
  );
};

export default NotFound;
