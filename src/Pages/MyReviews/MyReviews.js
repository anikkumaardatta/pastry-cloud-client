import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import usePageTitle from "../../Hooks/usePageTitle";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user, loading } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  usePageTitle("My Reviews");

  const reviewsCopyReverse = myReviews.slice(0, myReviews.length).reverse();

  useEffect(() => {
    fetch(`https://pastry-cloud-server.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [user?.email]);
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete?");
    if (confirm) {
      fetch(`https://pastry-cloud-server.vercel.app/reviews/${id}`, {
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
  return (
    <>
      <div className="mx-6">
        <div className="max-w-6xl mx-auto my-20 ">
          <h1 className="text-3xl my-6">
            You have reviewed {myReviews.length} items
          </h1>
          <div className="grid grid-cols-1 gap-6">
            {reviewsCopyReverse.map((myReview) => (
              <MyReview
                key={myReview._id}
                myReview={myReview}
                handleDelete={handleDelete}
              ></MyReview>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReviews;
