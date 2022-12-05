import PropTypes from 'prop-types';

export const ContactsList = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
