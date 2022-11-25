import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto">
      {blogs.map((blog) => (
        <Blog key={blog._id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
