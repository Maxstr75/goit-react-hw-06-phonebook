import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValueState } from 'redux/Contacts/contactsSelectors';
import { Input, Label } from './Filter.styled';
import * as actions from '../../redux/Contacts/contactsActions';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValueState);

  const handleFilter = event => {
    dispatch(actions.handleFilter(event.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={handleFilter} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
