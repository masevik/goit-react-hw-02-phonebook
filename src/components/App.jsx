import { Component } from 'react';
import { ContactsList } from './ContactsList/ContactsList';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = event => {
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <PhonebookForm
            onSubmit={this.addContact}
            onChange={this.onChange}
            value={this.state.name}
          />
        </Section>
        <Section title="Contacts">
          <ContactsList contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
