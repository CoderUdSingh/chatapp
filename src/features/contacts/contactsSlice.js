import { createSlice } from "@reduxjs/toolkit";
import { contacts as Contacts } from "../../assets/contacts";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    allContacts: Contacts,
    selectedContactId: null,
  },
  reducers: {
    selectContact: (state, action) => {
      state.selectedContactId = action.payload;
    },
    sendMessage: (state, action) => {
      const { contactId, message } = action.payload;
      const contact = state.allContacts.find((c) => c.id === contactId);
      if (contact) {
        contact.chats.push(message);
      }
    },
    addNewContact: (state, action) => {
      state.allContacts.push(action.payload);
    },
    searchContacts: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      state.allContacts = Contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery)
      );
    },
    resetContacts: (state) => {
      state.allContacts = Contacts;
    },
  },
});

export const {
  selectContact,
  sendMessage,
  addNewContact,
  searchContacts,
  resetContacts,
} = contactsSlice.actions;

export default contactsSlice.reducer;
