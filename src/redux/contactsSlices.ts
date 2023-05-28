import { createSlice } from '@reduxjs/toolkit';
import { IContactsState } from '../types';
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const initialState: IContactsState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = [...action.payload];
      state.isLoading = false;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => action.payload.id !== item.id);
      state.isLoading = false;
    });
    builder.addCase(fetchContacts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addContact.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const contactReduser = contactsSlice.reducer;
console.log();
// export const { Add, Remove } = contactsSlice.actions;
//  reducer(state, action: PayloadAction<IContact>) {
//       state.items.push(action.payload);
//     },
//     prepare({ person, number }) {
//       return {
//         payload: {
//           // id: nanoid(),
//           name: person,
//           number,
//         },
//       };
//     },
// Remove(state, action) {
//       return state.filter(({ id }) => id !== action.payload);
//     },
