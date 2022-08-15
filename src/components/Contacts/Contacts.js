export const Contacts = ({contacts, filter, deleteContact}) => {
  // let selectContact = (e) => {
  //   deleteContact()
  // }
      return (
        <ul id="contacts">
          {contacts.filter(contact => contact.name.toLowerCase().includes(filter)).map((contact) => (
              <li key={contact.id}>
                <p>{contact.name}: {contact.number}</p>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </li>
          ))}
        </ul>
      )
}