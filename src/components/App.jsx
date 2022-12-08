import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Box } from './Box';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { PhonebookForm } from './PhonebookForm';
import { Section } from './Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFilterChange = filter => this.setState({ filter: filter.toLowerCase() });

  addContact = ({ name, number }) => {
    const nameList = this.state.contacts.map(item => item.name);
    const currentContacts = {
      name,
      number,
      id: nanoid(),
    };

    nameList.includes(currentContacts.name)
      ? alert(currentContacts.name + ' is already in contacts')
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, currentContacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { addContact, onFilterChange, deleteContact } = this;
    const { filter, contacts } = this.state;

    return (
      <Box ml="50px" mt="20px">
        <Section title="Phonebook">
          <PhonebookForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={onFilterChange} />
          {contacts.length !== 0 && (
            <ContactsList
              data={contacts}
              filter={filter}
              onDeleteContact={deleteContact}
            />
          )}
        </Section>
      </Box>
    );
  }
}
