import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { ContactItem, UserIcon, PhoneIcon } from './ContactsList.styled';

export const ContactsList = ({ data, filter }) => {
  // const filteredContacts = data.filter(contact => contact.name === 'string');
  // console.log(filteredContacts);

  return (
    <Box width="350px" pl="20px" pr="20px" as="ul">
      {data.map(item => (
        <ContactItem key={item.id}>
          <span>
            <UserIcon /> {item.name}
          </span>
          <span>
            <PhoneIcon />
            {item.number}
          </span>
        </ContactItem>
      ))}
    </Box>
  );
};

ContactsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string,
};
