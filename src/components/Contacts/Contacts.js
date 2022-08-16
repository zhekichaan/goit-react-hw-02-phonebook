import styled from "styled-components"

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

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0px;
`

const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
`