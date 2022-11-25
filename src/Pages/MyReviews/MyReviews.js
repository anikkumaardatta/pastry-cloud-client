import React, { useContext, useEffect, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { json } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import usePageTitle from "../../Hooks/usePageTitle";

const MyReviews = () => {
  const { user, loading } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  usePageTitle("My Reviews");

  const reviewsCopyReverse = myReviews.slice(0, myReviews.length).reverse();

  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount === 1) {
            alert("deleted successfully");
            const remaining = myReviews.filter(
              (myReview) => myReview._id !== id
            );
            setMyReviews(remaining);
          }
        });
    }
  };
  console.log(myReviews);
  return (
    <>
      <div className="mx-6">
        <div className="max-w-6xl mx-auto my-20 ">
          <h1 className="text-3xl my-6">
            You have reviewed {myReviews.length} items
          </h1>
          <div className="grid grid-cols-1 gap-6">
            {reviewsCopyReverse.map((myReview) => (
              <div className="">
                <div className="card bg-base-100 shadow-xl bor border-solid hover:border-dotted border-2 border-rose-600">
                  <div className="card-body">
                    <h2 className="card-title">{myReview.pastryName}</h2>
                    <span className="badge badge-ghost badge-sm mb-6">
                      {myReview.reviewDate}
                    </span>
                    <p className="mb-6">
                      <span className="bg-base-200 rounded-md px-2 text-rose-800">
                        Feedback:
                      </span>{" "}
                      {myReview.message}
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary  btn-circle text-2xl btn-outline">
                        <FaRegEdit></FaRegEdit>
                      </button>
                      <button
                        onClick={() => handleDelete(myReview._id)}
                        className="btn btn-primary btn-circle text-2xl btn-outline"
                      >
                        <FaRegTrashAlt></FaRegTrashAlt>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReviews;
