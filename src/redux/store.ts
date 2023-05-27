import { configureStore } from '@reduxjs/toolkit';
import { contactReduser } from './contactsSlices';
import { filterReducer } from './filterSlices';

export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterReducer,
  },
});
