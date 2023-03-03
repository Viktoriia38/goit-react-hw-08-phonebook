import { createSelector } from '@reduxjs/toolkit';

// Auth
export const selectUserData = state => state.auth.authData;
export const selectUserName = state => state.auth.authData.name;
export const selectUserEmail = state => state.auth.authData.email;
export const selectToken = state => state.auth.token;
export const selectiIsLoading = state => state.auth.IsLoading;
export const selectError = state => state.auth.error;

// Contacts
export const selectContacts = state => state.contacts.contacts;
export const selectiContactsItems = state => state.contacts.contacts.items;
export const selectContactsIsLoading = state =>
  state.contacts.contacts.IsLoading;
export const selectContactsError = state => state.contacts.contacts.error;
export const selectFilter = state => state.contacts.filter;

export const selectFilterContacts = createSelector(
  [selectiContactsItems, selectFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase())
    )
);
