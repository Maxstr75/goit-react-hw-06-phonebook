import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './contactsActions';
// console.log(actions);

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [actions.handleFilter]: (_, { payload }) => payload,
});

const contactReducers = combineReducers({
  items,
  filter,
});

export { contactReducers };
