import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { myContactsSlice } from './Contacts/slice';
import { myFilterSlice } from './Filter/slice';
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

const rootReducer = combineReducers({
  contacts: myContactsSlice.reducer,
  filter: myFilterSlice.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistContactsReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);