import React from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const MyReview = ({ myReview, handleDelete }) => {
  const { pastryName, reviewDate, message, _id } = myReview;
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl bor border-solid hover:border-dotted border-2 border-rose-600">
        <div className="card-body">
          <h2 className="card-title">{pastryName}</h2>
          <span className="badge badge-ghost badge-sm mb-6">{reviewDate}</span>
          <p className="mb-6">
            <span className="bg-base-200 rounded-md px-2 text-rose-800">
              Feedback:
            </span>{" "}
            {message}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary  btn-circle text-2xl btn-outline">
              <FaRegEdit></FaRegEdit>
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary btn-circle text-2xl btn-outline"
            >
              <FaRegTrashAlt></FaRegTrashAlt>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
