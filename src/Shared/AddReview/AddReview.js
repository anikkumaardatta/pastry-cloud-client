import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const AddReview = ({ loaderData }) => {
  const { user } = useContext(AuthContext);
  const { _id, title } = loaderData;

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const newDate = new Date();
    const phoneNumber = form.phone.value;
    const message = form.message.value;

    console.log("name : ", newDate);
    console.log("phoneNumber : ", phoneNumber);
    console.log("message : ", message);

    const review = {
      pastryId: _id,
      pastryName: title,
      reviewDate: newDate,
      reviewerUId: user.uid,
      reviewerName: user.displayName,
      reviewerEmail: user.email,
      reviewerPhoto: user.photoURL,
      phoneNumber,
      message,
    };
    const toastError = (status) => toast.error(status);
    const toastSuccess = (status) => toast.success(status);

    if (phoneNumber.length > 14 || phoneNumber.length < 11) {
      return toastError("Please provide a valid phone number");
    } else if (message.length > 500) {
      return toastError(
        "Review message too long (please wright a review message les then 500 characters long"
      );
    } else if (message.length < 10) {
      return toastError("Review message is too short");
    } else {
      fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toastSuccess("Review added successfully");
            form.reset();
            // <Navigate to="/myreviews" replace={true}></Navigate>;
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false}></Toaster>
      <div className="my-6 bg-base-200 p-5 rounded-lg ">
        <h1 className="text-3xl mb-6">Add a review</h1>
        <form onSubmit={handleAddReview}>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="form-control w-full">
              <input
                type="text"
                name="newDate"
                defaultValue={new Date()}
                placeholder="Date:"
                className="input input-bordered w-full"
                readOnly
                required
              />
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                name="phone"
                placeholder="Your phone (Must be at least 11 digits)"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <textarea
            className="textarea my-3 w-full"
            name="message"
            placeholder="Wright review"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn-block">
            <FaPlus></FaPlus> Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
