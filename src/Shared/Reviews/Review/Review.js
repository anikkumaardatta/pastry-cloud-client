import React from "react";

const Review = ({ review }) => {
  const {
    reviewerName,
    reviewerEmail,
    reviewerPhoto,
    phoneNumber,
    reviewDate,
    message,
  } = review;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={reviewerPhoto} alt={reviewerName} />
            </div>
          </div>
          <div>
            <div className="font-bold">{reviewerName}</div>
            <div className="text-sm opacity-50">{reviewerEmail}</div>
          </div>
        </div>
      </td>
      <td>
        {phoneNumber}
        <br />
        <span className="badge badge-ghost badge-sm">{reviewDate}</span>
        <br />
      </td>
      <td>
        {/* The button to open modal */}

        <>
          <label htmlFor="my-modal-3" className="btn btn-ghost btn-xs">
            Show Text
          </label>
        </>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold mt-6">{reviewerName}</h3>
            <p className="py-4 mb-2">{message}</p>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Review;
