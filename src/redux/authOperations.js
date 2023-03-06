import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUserDetailsRequest,
  login,
  register,
  token,
  userLogOutRequest,
} from '../services/api';

export const registerRequest = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await register(formData);
      token.set(response.token, 'Bearer');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginRequest = createAsyncThunk(
  'auth/login',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await login(formData);
      token.set(response.token, 'Bearer');
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutRequest = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await userLogOutRequest();
      token.unSet(response.token, 'Bearer');
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserRequest = createAsyncThunk(
  'user/getCurrent',
  async (_, { rejectWithValue, getState }) => {
    try {
      const persistToken = getState().auth.token;
      if (!persistToken) return rejectWithValue('No token');
      token.set(persistToken, 'Bearer');
      const response = await getUserDetailsRequest();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
