import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Button, Form, Input, Label } from './PhonebookForm.styled';

export class PhonebookForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onHandleSubmit}>
        <Label htmlFor={this.nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={this.telInputId}>Number</Label>
        <Input
          type="tel"
          name="number"
          id={this.telInputId}
          value={this.state.number}
          onChange={this.onChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
