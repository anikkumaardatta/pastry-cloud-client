import React, { useEffect, useState } from "react";
import Review from "./Review/Review";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://pastry-cloud-server.vercel.app/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  let isReviews = false;

  if (reviews.length > 0) {
    isReviews = true;
  }
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full max-w-6xl mx-auto">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Review Message</th>
          </tr>
        </thead>
        <tbody>
          {isReviews ? (
            reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))
          ) : (
            <>
              <tr className="text-3xl">
                <th>No Reviews</th>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
