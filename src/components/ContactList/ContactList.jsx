import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import * as actions from '../../redux/Contacts/contactsActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  getItemsValueState,
  getFilterValueState,
} from 'redux/Contacts/contactsSelectors';

const ContactList = () => {
  const contacts = useSelector(getItemsValueState);
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValueState);
  const deleteContacts = contactsId => {
    dispatch(actions.deleteContact(contactsId));
  };

  // Возвращает результат фильтра
  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = filterContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContacts={deleteContacts}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
