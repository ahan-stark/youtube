import React from "react";

let count = [1, 2, 3, 4, 5, 6];
const Shimmer = () => {
  return (
    <div className="flex flex-row flex-wrap w- full gap-3">
      {count.map((val, index) => {
        return <div className="w-[32%] rounded-md bg-red-200 h-40  " key={index}></div>;
      })}
    </div>
  );
};

export default Shimmer;
