import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from '../redux/authSlice';
import { contactsReducer } from '../redux/contactsSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistedReducer,
});
