import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  contactsDeleteDataFetch,
  contactsGetDataFetch,
  contactsPostDataFetch,
} from '../services/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/getByQuary',
  async (_, thunkAPI) => {
    try {
      const result = await contactsGetDataFetch();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addByQuary',
  async ({ name, number }, thunkAPI) => {
    try {
      const result = await contactsPostDataFetch({ name, number });
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteByQuary',
  async (id, thunkAPI) => {
    try {
      const result = await contactsDeleteDataFetch(id);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
