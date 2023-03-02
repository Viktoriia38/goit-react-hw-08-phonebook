import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUserRequest,
  loginRequest,
  logOutRequest,
  registerRequest,
} from './authOperations';

const initialState = {
  authData: {
    name: null,
    email: null,
  },
  token: '',
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder

      .addCase(loginRequest.pending, pendingHandler)
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.authData.name = action.payload.user.name;
        state.authData.email = action.payload.user.email;
      })
      .addCase(loginRequest.rejected, rejectHandler)

      .addCase(registerRequest.pending, pendingHandler)
      .addCase(registerRequest.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.token = action.payload.token;
        state.authData.name = action.payload.user.name;
        state.authData.email = action.payload.user.email;
      })
      .addCase(registerRequest.rejected, rejectHandler)

      .addCase(getCurrentUserRequest.pending, pendingHandler)
      .addCase(getCurrentUserRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authData.name = action.payload.name;
        state.authData.email = action.payload.email;
      })
      .addCase(getCurrentUserRequest.rejected, rejectHandler)

      .addCase(logOutRequest.pending, pendingHandler)
      .addCase(logOutRequest.fulfilled, state => {
        state.isLoading = false;
        state.token = null;
        state.authData.name = null;
        state.authData.email = null;
      })
      .addCase(logOutRequest.rejected, rejectHandler),
});

function pendingHandler(state) {
  state.error = null;
  state.isLoading = true;
}
function rejectHandler(state, action) {
  state.error = action.payload;
  state.isLoading = false;
}

export const authReducer = authSlice.reducer;
