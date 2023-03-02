import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsRequest,
  addContactRequest,
  deleteContactRequest,
} from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContactsRequest.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(getContactsRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContactRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContactRequest.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(addContactRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContactRequest.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContactRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { filterContacts } = contactsSlice.actions;
