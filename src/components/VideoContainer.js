import React from "react";
import useGetVideo from "../hooks/useGetVideo";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const data = useGetVideo();
  if (data == null)
    return (
      <div className="w-[100%]">
        <Shimmer />
      </div>
    );
  const { items } = data;
  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => {
        return (
          <Link to = {"/watch?v=" + item.id} key={index}>
            <VideoCard info={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
