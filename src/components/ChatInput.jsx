import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../features/contacts/contactsSlice";

const ChatInput = () => {
  const [msg, setMsg] = useState("");
  const selectedContactId = useSelector(
    (state) => state.contacts.selectedContactId
  );
  const dispatch = useDispatch();

  const handleSend = () => {
    if (msg.trim() === "") return;
    const now = new Date();
    const formattedTime = `${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    dispatch(
      sendMessage({
        contactId: selectedContactId,
        message: {
          identifier: "Uddeshya",
          message: msg,
          time: formattedTime,
        },
      })
    );

    setMsg("");
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
