import React from "react";

const SearchBar = ({ onNewConversation, setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={handleSearch}
      />
      <div style={{ padding: "10px" }}>
        <button onClick={onNewConversation} style={{ width: "100%" }}>
          + New Conversation
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
