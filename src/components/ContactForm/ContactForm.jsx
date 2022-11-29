import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContainerForm,
  ContactForm,
  Lable,
  Button,
  Input,
} from './ContactForm.styled';

export class Form extends Component {
  static defaultProps = {
    initialName: '',
    initialNumber: '',
  };

  static propTypes = {
    initialName: PropTypes.string.isRequired,
    initialNumber: PropTypes.string.isRequired,
  };

  state = {
    name: this.props.initialName,
    number: this.props.initialNumber,
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contacts = this.props.contacts;

    if (contacts.some(contact => contact.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.onSubmit(this.state);
    }

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContainerForm>
        <ContactForm onSubmit={this.handleSubmit}>
          <Lable>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Lable>
          <Lable>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Lable>

          <Button type="submit">Add contacts</Button>
        </ContactForm>
      </ContainerForm>
    );
  }
}
