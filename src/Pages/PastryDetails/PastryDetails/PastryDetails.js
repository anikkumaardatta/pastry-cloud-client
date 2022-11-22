import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const PastryDetails = () => {
  const { user } = useContext(AuthContext);
  const { _id, thumbnail, title, description, price, ratings } =
    useLoaderData();

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName || "Unregistered";
    const phoneNumber = form.phone.value;
    const message = form.message.value;

    console.log("name : ", name);
    console.log("phoneNumber : ", phoneNumber);
    console.log("message : ", message);

    const review = {
      pastry: _id,
      pastryName: title,
      customer: name,
      phoneNumber,
      message,
    };
    if (phoneNumber.length > 14 || phoneNumber.length < 11) {
      return alert("Please type valid Phone Number");
    } else if (message.length > 100) {
      return alert(
        "Review message too long (please wright a review message les then 100 characters long"
      );
    } else if (message.length < 10) {
      return alert(
        "Review message too short (please wright a review message les then 100 characters long"
      );
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
            alert("Review added successfully");
            form.reset();
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={thumbnail} className="rounded-lg shadow-2xl m-5" />
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
          <div className="my-6 bg-base-200 p-5 rounded-lg " disable>
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
              <button
                type="submit"
                className="btn btn-primary btn-block disabled"
              >
                <FaPlus></FaPlus> Add Review
              </button>
            </form>
          </div>
        ) : (
          <Link to="/login" className="btn btn-ghost btn-block my-6">
            Please login to add a review
          </Link>
        )}
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
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://i2-prod.mirror.co.uk/incoming/article27885918.ece/ALTERNATES/s1200c/0_Anne-Marie.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">anni@mail.com</div>
                    </div>
                  </div>
                </td>
                <td>
                  01970192772
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tue Nov 22 2022 14:00:01 GMT+0600 (Bangladesh Standard Time)
                  </span>
                  <br />
                </td>
                <td>
                  {/* The button to open modal */}

                  <th>
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-ghost btn-xs"
                    >
                      details
                    </label>
                  </th>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-3"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="text-lg font-bold mt-6">
                        Congratulations random Internet user!
                      </h3>
                      <p className="py-4 mb-2">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PastryDetails;
