import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const checkToggle = useSelector((store) => store.app.isMenuOpen);
  if (!checkToggle) return;
  return (
    <div className="w-48 shadow-lg pl-6 ">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Games</li>
        <li>Music</li>
        <li>sports</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Movies</li>
        <li>Games</li>
        <li>Music</li>
        <li>sports</li>
      </ul>
      <h1 className="font-bold pt-5">Live</h1>
      <ul>
        <li>Movies</li>
        <li>Games</li>
        <li>Music</li>
        <li>sports</li>
      </ul>
    </div>
  );
};

export default SideBar;
