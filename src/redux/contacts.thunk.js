import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63e7a672cbdc5658737b00c0.mockapi.io';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
  });

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactByIdThunk = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => {
      try {
        const {data} = await axios.delete(`/contacts/${id}`);
        return data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );