const NewConversation = ({ contacts, onSelect, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Select a Contact</h3>
        <div className="modal-contact-list">
          {contacts && contacts.length > 0 ? (
            contacts.map((contact) => (
              <div
                key={contact.id}
                className="contact"
                onClick={() => {
                  onSelect(contact.id);
                  onClose();
                }}
              >
                {contact.name}
              </div>
            ))
          ) : (
            <p>No contacts available.</p>
          )}
        </div>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NewConversation;
