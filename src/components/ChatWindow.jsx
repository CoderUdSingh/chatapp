import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  const { allContacts, selectedContactId } = useSelector(
    (state) => state.contacts
  );
  const selectedContact = allContacts.find((c) => c.id === selectedContactId);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedContact?.chats]);

  if (!selectedContact) return null;

  return (
    <div className="chat-window">
      <div className="chat-header">{selectedContact.name}</div>
      <div className="chat-messages">
        {selectedContact.chats.map((item, index) => (
          <div
            key={index}
            className={item.identifier === "Uddeshya" ? "mymessage" : "message"}
          >
            <div>{item.message}</div>
            <div className="message-time">{item.time}</div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
