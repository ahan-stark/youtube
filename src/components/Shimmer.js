import React from "react";

let count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Shimmer = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-3  mt-4 w-[98%]">
      {count.map((val, index) => {
        return (
          <div className="w-[30%] rounded-md bg-red-200 h-40" key={index}></div>
        );
      })}
    </div>
  );
};

export default Shimmer;
