import React from "react";

const Blog = ({ blog }) => {
  const { thumbnail, ques, ans } = blog;
  return (
    <div className="card w-full  shadow-xl m-6">
      <figure className="px-10 pt-10">
        <img src={thumbnail} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title pb-3 mb-5 border-b-4 border-double border-rose-600">
          {ques}
        </h2>
        <p>{ans}</p>
        <div className="card-actions my-3">
          <button className="btn btn-primary">learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
