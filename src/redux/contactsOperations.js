import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'services/api';

export const getContactsRequest = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getContacts();

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactRequest = createAsyncThunk(
  'contacts/addContact',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await addContact(formData);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactRequest = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await deleteContact(contactId);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
