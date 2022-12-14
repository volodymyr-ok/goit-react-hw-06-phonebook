// import { useState, useEffect } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { StyledH2 } from './App.styled';
// import contactsCheking from 'utils/contactsChecking';

// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';

// const LS_CS_KEY = `contacts_list`;

export const App = () => {
  // const dispatch = useDispatch();

  // const [contacts, setContacts] = useState([]);
  // const [filter] = useState(''); // setFilter

  // useEffect(() => {
  //   const savedContacts = localStorage.getItem(LS_CS_KEY);
  //   if (!savedContacts) {
  //     return;
  //   }
  //   setContacts(JSON.parse(savedContacts));
  // }, []);

  // useEffect(() => {
  //   if (!contacts.length) {
  //     return;
  //   }
  //   localStorage.setItem(LS_CS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const addContactHandler = data => {
  //   const inContactList = contacts.filter(contact =>
  //     contactsCheking(contact, data)
  //   ).length;
  //   if (inContactList) {
  //     return;
  //   }
  //   setContacts([data, ...contacts]);
  // };

  // const handleFilter = ({ target }) => {
  //   setFilter(target.value.toLowerCase());
  // };

  // const filteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter)
  //   );
  // };

  // const deleteContactHandler = name => {
  //   setContacts(contacts.filter(contact => contact.name !== name));
  //   dispatch(deleteContact(name));
  // };

  return (
    <>
      <StyledH2>Phonebook</StyledH2>
      <Form /> {/* addContactHandler={addContactHandler} */}
      <StyledH2>Contacts</StyledH2>
      <Filter /> {/* onChange={handleFilter} value={filter} */}
      <Contacts />
      {/* contacts={filteredContacts()} onDelete={deleteContactHandler} */}
    </>
  );
};
