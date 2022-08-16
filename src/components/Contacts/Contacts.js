import PropTypes from 'prop-types';
import { ContactsList, ContactsItem } from './Contacts.styled';

export const Contacts = ({contacts, filter, deleteContact}) => {
  return (
    <ContactsList id="contacts">
      {contacts.filter(contact => contact.name.toLowerCase().includes(filter)).map((contact) => (
          <ContactsItem key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </ContactsItem>
      ))}
    </ContactsList>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
}

