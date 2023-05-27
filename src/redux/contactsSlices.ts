import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IContact } from '../types';
// import { nanoid } from 'nanoid';

const initialState: IContact[] = [];
// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    Add: {
      reducer(state, action: PayloadAction<IContact>) {
        state.push(action.payload);
      },
      prepare({ person, number }) {
        return {
          payload: {
            // id: nanoid(),
            name: person,
            number,
          },
        };
      },
    },
    Remove(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const contactReduser = contactsSlice.reducer;
export const { Add, Remove } = contactsSlice.actions;
