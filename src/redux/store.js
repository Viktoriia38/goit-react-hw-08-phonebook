import { contactsReducer } from './contactsSlice';
import { authReducer } from './authSlice';

import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsReducerConfig = {
  key: 'user',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contactsData: persistReducer(contactsReducerConfig, contactsReducer),
    auth: persistReducer(contactsReducerConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          persistStore,
          persistReducer,
          FLUSH,
          PAUSE,
          PERSIST,
          REHYDRATE,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
