import React, { useEffect, useState } from "react";
import Pastry from "./Pastry";

const Pastrys = () => {
  const [pastrys, setPastrys] = useState([]);

  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => {
        setPastrys(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-5xl">Pastry {pastrys.length}</h1>
      <div className="m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {pastrys.map((pastry) => (
          <Pastry pastry={pastry}></Pastry>
        ))}
      </div>
    </div>
  );
};

export default Pastrys;
