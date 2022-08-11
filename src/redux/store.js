import { configureStore } from '@reduxjs/toolkit';
import { contactReducers } from './Contacts/contactsReducers';
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

const persistConfig = {
  key: 'contacts',
  //   version: 1,
  storage,
  //   blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, contactReducers);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
