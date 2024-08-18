import React from "react";
import useGetSearchVideo from "../hooks/useGetSearchVideo";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [searchKeyword] = useSearchParams();
  const searchResults = useGetSearchVideo(searchKeyword.get("value"));

  if (searchResults == null) return <Shimmer />;
  const { items } = searchResults;

  return (
    <div className="flex flex-wrap ml-6">
      {items.map((item, index) => {
        return (
          <Link to={"/watch?v=" + item.id.videoId} key={index}>
            <VideoCard info={item} key={index} />{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
