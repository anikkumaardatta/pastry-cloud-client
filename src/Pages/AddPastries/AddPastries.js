import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddPastries = () => {
  // {
  //  thumbnail: "https://i.ibb.co/RcTB3Xm/Lemon-Layer-Pastry.jpg"
  //  title: "Lemon Layer Pastry 120gm"
  //  description: "Shake well before use, and use the same amount of bottled lemon juice …"
  //  price: "4.99"
  //  ratings: "5"
  // }
  const handleAddPastry = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const thumbnail = form.thumbnail.value;
    const description = form.description.value;

    const pastry = {
      title,
      price,
      thumbnail,
      description,
    };
    fetch("http://localhost:5000/pastries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(pastry),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Pastry added successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="max-w-6xl mx-auto">
      <div className="my-6 bg-base-200 p-5 rounded-lg ">
        <h1 className="text-3xl mb-6">Add a pastry</h1>
        <form onSubmit={handleAddPastry}>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div className="form-control w-full">
              <input
                type="text"
                name="title"
                placeholder="Pastry Name :"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <input
                type="number"
                name="price"
                placeholder="Price : $"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <input
            type="text"
            name="thumbnail"
            placeholder="Pastry Image URL :"
            className="input input-bordered w-full mt-3"
            required
          />
          <textarea
            className="textarea my-3 w-full"
            name="description"
            placeholder="Description :"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary btn-block">
            <FaPlus></FaPlus> Add A Pastry
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPastries;
