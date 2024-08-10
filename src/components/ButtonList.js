import React from "react";
import Button from "./Button";

const btnList = ["all", "gaming", "music", "news", "fifa", "cricket", "ufc", "cooking","streams","basketball"];

const ButtonList = () => {
  return (
    <div className="flex">
      {btnList.map((val) => {
        return <Button name={val} />;
      })}
    </div>
  );
};

export default ButtonList;
