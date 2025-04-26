import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import EmptyWindow from "../components/EmptyWindow";
import NewConversation from "../components/NewConversation";
import ChatInput from "../components/ChatInput";
import { selectContact } from "../features/contacts/contactsSlice";

import { useDispatch, useSelector } from "react-redux";

const ChatPage = () => {
  const [showModal, setShowModal] = useState(false);
  const selectedContactId = useSelector(
    (state) => state.contacts.selectedContactId
  );
  const contacts = useSelector((state) => state.contacts.allContacts);
  const dispatch = useDispatch();
  const handleSelectContact = (contactId) => {
    dispatch(selectContact(contactId));
    setShowModal(false); // close modal after selecting
  };

  return (
    <div className="container">
      {/* Sidebar section */}
      <div className="sidebar">
        <Sidebar onNewConversation={() => setShowModal(true)} />
      </div>

      {/* Right-side area */}
      <div className="right-area">
        {selectedContactId !== undefined &&
        selectedContactId !== null &&
        selectedContactId !== "" ? (
          <>
            <ChatWindow />
          </>
        ) : (
          <EmptyWindow />
        )}
      </div>

      {/* Modal for new conversation */}
      {showModal && (
        <NewConversation
          contacts={contacts}
          onSelect={handleSelectContact}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ChatPage;
