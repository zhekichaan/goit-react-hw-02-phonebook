import { Component } from "react";
import { Contacts } from "./Contacts/Contacts";
import { Phonebook } from "./Phonebook/Phonebook";
import { Filter } from "./Filter/Filter";
import { Box } from "./Box";
import { GlobalStyle } from "./GlobalStyles";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  updateContacts = (id, name, number) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, {id: id, name: name, number: number}]
    }))
  }

  updateFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(element => element.id !== id);
    this.setState({ contacts: newContacts });
  }

  render() {
    return (
      <Box p="20px">
        <h2>Phonebook</h2>
        <Phonebook state={this.state} updateContacts={this.updateContacts} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} updateFilter={this.updateFilter} />
        <Contacts contacts={this.state.contacts} filter={this.state.filter} deleteContact={this.deleteContact} />
        <GlobalStyle />
      </Box>
    );
  }
};
