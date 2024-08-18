import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/liveChatSlice";
import { generateMsg, generateName } from "../utils/liveChatData";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
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
    <div className="">
      <div className="p-2 border h-[26em]  bg-yellow-200 overflow-y-scroll rounded-lg">
        <div className="font-bold"> Live Chat</div>
        <div>
          {chatMessage.map((chat, index) => {
            return (
              <ChatMessage name={chat.name} msg={chat.messsage} key={index} />
            );
          })}
        </div>
      </div>
      <form
        className="w-[100%] p-2 rounded-lg mt-1"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({name : 'ahan', messsage : liveMsg}))
        }}
      >
        <input
          className="w-[75%] pl-2 h-[2em] "
          placeholder="message!"
          type="text"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button className="ml-2 h-[2.2em] border-[2px]  rounded-lg bg-red-500 text-white w-[3.5em]">
          send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
