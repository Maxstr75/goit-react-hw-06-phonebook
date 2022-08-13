import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContacts }) => {
  return (
    <Item key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDeleteContacts(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactItem;
