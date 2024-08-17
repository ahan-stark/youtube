import React from "react";
import useGetSearchVideo from "../hooks/useGetSearchVideo";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const SearchPage = () => {
  const searchResults = useGetSearchVideo();
  console.log(searchResults);
  
  if (searchResults == null)
    return;
  const { items } = searchResults;
  console.log(items);

  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => {
        return <VideoCard info={item} key={index} />;
      })}
    </div>
  );
};

export default SearchPage;
