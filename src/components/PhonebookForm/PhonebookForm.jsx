import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Button } from './PhonebookForm.styled';

export class PhonebookForm extends Component {
  state = {
    name: '',
  };

  nameInputId = nanoid();

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
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}
