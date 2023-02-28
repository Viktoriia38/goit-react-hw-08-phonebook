import { contactsReducer } from './contactsSlise';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
  },
});
