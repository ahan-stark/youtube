import React from "react";
import yLogo from "../utils/youtube.png";
import hamBurger from "../utils/hamburger.png";
import userLogo from "../utils/user.png";
import { useDispatch } from "react-redux";
import { toggleIsMenu } from "../store/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleIsMenu());
  };
  return (
    <div className="grid grid-flow-col py-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src={hamBurger}
          alt="☹️"
          className="h-5 cursor-pointer"
          onClick={toggleMenu}
        />
        <img src={yLogo} alt="☹️" className="h-7 -mt-2 mx-4" />
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          placeholder="search here"
          className="w-[50%] border border-gray-600 rounded-xl mr-1 p-2"
        />
        <button className="p-2 border border-red-600 rounded-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img src={userLogo} alt="☹️" className="h-7" />
      </div>
    </div>
  );
};

export default Head;
