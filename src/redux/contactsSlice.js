import { createSlice } from '@reduxjs/toolkit';
// const CONTACTS_KEY = `saved_contacts`;
const LS_CS_KEY = `contacts_list`;

const initialContactsState = () => {
  const savedContacts = localStorage.getItem(LS_CS_KEY);
  if (!savedContacts) {
    return [];
  }
  return JSON.parse(savedContacts);
};

const setContactsInStorage = data =>
  localStorage.setItem(LS_CS_KEY, JSON.stringify(data));
const getContactsFromStorage = localStorage.getItem(LS_CS_KEY);
console.log(getContactsFromStorage);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact(state, action) {
      const newState = [action.payload, ...state];
      setContactsInStorage(newState);
      return newState;
    },
    deleteContact(state, action) {
      const newState = state.filter(contact => contact.name !== action.payload);
      setContactsInStorage(newState);
      return newState;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
