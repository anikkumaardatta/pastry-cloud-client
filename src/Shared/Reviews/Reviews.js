import React, { useEffect, useState } from "react";
import Review from "./Review/Review";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);

  console.log("id:", id, "reviews :", reviews);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
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
            <div className="text-3xl">No Reviews</div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
