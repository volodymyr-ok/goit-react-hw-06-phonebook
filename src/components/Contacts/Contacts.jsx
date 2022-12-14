// import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import { StyledUL } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

// { contacts, onDelete }
export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  return (
    <>
      {contacts.length && (
        <StyledUL>
          {filteredContacts().map(({ name, number }) => {
            return (
              <ContactItem
                key={nanoid()}
                name={name}
                number={number}
                // onDelete={onDelete}
              />
            );
          })}
        </StyledUL>
      )}
    </>
  );
};

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
