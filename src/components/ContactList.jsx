import React from "react";
import { useDispatch } from "react-redux";
import { selectContact } from "../features/contacts/contactsSlice";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleSelect = (id) => {
    dispatch(selectContact(id));
  };

  return (
    <div className="contacts">
      {contacts.map((contact) => {
        const lastMessage = contact.chats[contact.chats.length - 1];

        return (
          <div
            key={contact.id}
            className="contact"
            onClick={() => handleSelect(contact.id)}
          >
            <div className="contact-header">
              <span className="contact-name">{contact.name}</span>
              <span className="contact-time">{lastMessage?.time}</span>
            </div>
            <div className="last-message">
              {lastMessage?.message.length > 30
                ? lastMessage.message.slice(0, 30) + "..."
                : lastMessage?.message}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
