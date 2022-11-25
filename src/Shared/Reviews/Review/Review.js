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
        <textarea
          className="textarea bg-white"
          defaultValue={message}
          placeholder="Bio"
          readOnly
        ></textarea>
      </td>
    </tr>
  );
};

export default Review;
