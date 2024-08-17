import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../store/appSlice";
import { useEffect } from "react";

const MainContainer = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    if (toggleMenu === false) {
      dispatch(openMenu());
    }
  }, []);
  return (
    <div className="">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
