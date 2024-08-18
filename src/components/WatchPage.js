import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const showSideBar = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="px-5 flex flex-row">
        <div>
          <iframe
            className="rounded-lg"
            width="1000"
            height="480"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1&si=AnhljScvZRbLUg8D&amp"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {!showSideBar && (
          <div className="border-[5px] border-red-400 h-[30em] w-[18.8em] ml-2 rounded-lg">
            <LiveChat />
          </div>
        )}
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
