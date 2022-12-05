import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Box } from './Box';
import { ContactsList } from './ContactsList';
import { PhonebookForm } from './PhonebookForm';
import { Section } from './Section';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = ({ name, number }) => {
    const currentContacts = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, currentContacts] };
    });
  };

  render() {
    return (
      <Box ml="50px" mt="20px">
        <Section title="Phonebook">
          <PhonebookForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length !== 0 && (
            <ContactsList data={this.state.contacts} />
          )}
        </Section>
      </Box>
    );
  }
}
