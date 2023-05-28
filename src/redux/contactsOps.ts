import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, putContact, removeContact } from '../services/api';
import { IContact } from 'types';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact: IContact, { rejectWithValue }) => {
    try {
      const response = await putContact(contact);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await removeContact(id);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);
