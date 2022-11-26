import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { Form } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';

export class App extends Component {
  static defaultProps = {
    initialContacts: [],
  };

  static propTypes = {
    initialContacts: PropTypes.array,
  };

  state = {
    contacts: this.props.initialContacts,
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <>
        <Container>
          <h2>Phonebook</h2>
          <Form onSubmit={this.formSubmitHandler} />
          {this.state.contacts.length > 0 && (
            <ContactList contacts={this.state.contacts} />
          )}
        </Container>
      </>
    );
  }
}
