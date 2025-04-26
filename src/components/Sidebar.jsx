import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ContactList from "./ContactList";
import { useSelector } from "react-redux";

const Sidebar = ({ onNewConversation }) => {
  const allContacts = useSelector((state) => state.contacts.allContacts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchBar
        onNewConversation={onNewConversation}
        setSearchTerm={setSearchTerm}
      />
      <ContactList contacts={filteredContacts} />
    </>
  );
};

export default Sidebar;
