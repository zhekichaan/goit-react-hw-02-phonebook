import { Component } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";

export class Phonebook extends Component  {
    state = {
        name: '',
        number: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
          if(this.props.state.contacts.filter(e => e.name === this.state.name).length === 0) {
            this.props.updateContacts(nanoid(), this.state.name, this.state.number)
            this.setState({
                name: '',
                number: ''
            })
          } else {
            alert(`${this.state.name} is already in contacts`)
          }
        
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <PhonebookForm action="" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={this.state.name} 
                    onChange={this.handleChange}
                    id={nanoid()}
                    required
                />
                <label>Number</label>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={this.state.number} 
                    onChange={this.handleChange}
                    id={nanoid()}
                    required
                />
                <button type="submit">Add contact</button>
            </PhonebookForm>
        )
    }
}

const PhonebookForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    border: 1px solid black;
    padding: 15px;
    margin: 20px 0 50px;

    & input {
        margin: 8px 0 16px;
        width: 200px;
    }

    & button {
        width: 150px;
    }
`