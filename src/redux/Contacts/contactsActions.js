import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => ({
    payload: { id: nanoid(), name, number },
  })
);

export const deleteContact = createAction('contacts/deleteContact');

export const handleFilter = createAction('contacts/handleFilter');
