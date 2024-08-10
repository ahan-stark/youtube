import React from "react";

const VideoCard = (props) => {
  const { snippet, statistics } = props.info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="w-72 shadow-lg p-2 m-22">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="☹️" />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
