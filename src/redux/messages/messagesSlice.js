import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Url = 'http://127.0.0.1:3000/api/messages';

const initialState = {
  message: {},
  isLoading: false,
  error: undefined,
};

export const getMessageItems = createAsyncThunk('messages/getMessageItems', async (name, thunkAPI) => {
  try {
    const resp = await axios(`${Url}`);
    const { data } = resp;
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});


const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getmessageItems
    builder.addCase(getMessageItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMessageItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    });
    builder.addCase(getMessageItems.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;