import React from "react";
import Button from "./Button";

const btnList = ["all", "gaming", "music", "news", "fifa", "cricket", "ufc", "cooking","streams","basketball"];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {btnList.map((val , index) => {
        return <Button name={val} key={index}/>;
      })}
    </div>
  );
};

export default ButtonList;
