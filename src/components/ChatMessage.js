import React from "react";

const ChatMessage = ({ name, msg }) => {
  return (
    <div className="flex flex-row items-center py-2">
      <img
        src="https://yt4.ggpht.com/ytc/AIdro_lMATeqMOu2FEhgSJSqllnFPMfB6uFvdUFCe23YJXVRxC4=s32-c-k-c0x00ffffff-no-rj"
        className="rounded-xl"
      />
      <div className="px-2">{name} : </div>
      <div>{msg}</div>
    </div>
  );
};

export default ChatMessage;
