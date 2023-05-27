import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    ContactFilter(state, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { ContactFilter } = filterSlice.actions;
