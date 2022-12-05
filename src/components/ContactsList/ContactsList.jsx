import PropTypes from 'prop-types';
import { ContactItem, UserIcon, PhoneIcon } from './ContactsList.styled';

export const ContactsList = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.map(item => (
        <ContactItem key={item.id}>
          <UserIcon /> <span>{item.name}</span>
          <PhoneIcon /> <span>{item.number}</span>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
