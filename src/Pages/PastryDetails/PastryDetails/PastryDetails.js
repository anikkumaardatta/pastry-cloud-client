import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import AddReview from "../../../Shared/AddReview/AddReview";
import Reviews from "../../../Shared/Reviews/Reviews";

const PastryDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const loaderData = useLoaderData();
  const { _id, thumbnail, title, description, price, ratings } = loaderData;
  return (
    <div className="max-w-6xl mx-auto">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={thumbnail}
            className="rounded-lg shadow-2xl m-5"
            alt="thumbnail"
          />
          <div className="m-2">
            <h1 className="text-5xl font-semibold">{title}</h1>
            <p className="py-6">{description}</p>
            <p className="text-2xl text-rose-600 font-semibold">
              Price : ${price}
            </p>
          </div>
        </div>
      </div>

      <div className="reviews my-20">
        <h1 className="text-5xl my-6 font-semibold text-center">Reviews</h1>
        {user ? (
          <AddReview loaderData={loaderData}></AddReview>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline btn-primary btn-block my-6"
          >
            Please login to add a review
          </Link>
        )}
        <Reviews key={_id} id={_id}></Reviews>
      </div>
    </div>
  );
};

export default PastryDetails;
