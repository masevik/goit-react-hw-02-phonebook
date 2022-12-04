import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Button } from './PhonebookForm.styled';

export class PhonebookForm extends Component {
  nameInputId = nanoid();

  render() {
    const { inputValue } = this.props.value;
    return (
      <form onSubmit={this.props.onSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          value={inputValue}
          onChange={this.props.onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}
