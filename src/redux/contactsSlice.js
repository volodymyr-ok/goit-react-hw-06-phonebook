import { createSlice } from '@reduxjs/toolkit';
const CONTACTS_KEY = `saved_contacts`;

const initialContactsState = () => {
  const savedContacts = localStorage.getItem(CONTACTS_KEY);
  if (!savedContacts) {
    return [];
  }
  return JSON.parse(savedContacts);
};

const setInStorage = data =>
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(data));

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact(state, action) {
      const newState = [action.payload, ...state];
      setInStorage(newState);
      return newState;
    },
    deleteContact(state, action) {
      const newState = state.filter(contact => contact.name !== action.payload);
      setInStorage(newState);
      return newState;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
