import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/liveChatSlice";
import { generateMsg, generateName } from "../utils/liveChatData";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.liveChat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addMessage({ name: generateName(), messsage: generateMsg() }));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-[19em] h-[480px] ml-2 p-2 border border-black bg-red-200 overflow-y-scroll">
      <div className="font-bold"> Live Chat</div>
      {chatMessage.map((chat, index) => {
        return <ChatMessage name={chat.name} msg={chat.messsage} key={index} />;
      })}
    </div>
  );
};

export default LiveChat;
