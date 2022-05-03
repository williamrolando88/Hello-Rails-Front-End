import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchGreet = createAsyncThunk('fetch/greeting', async () => {
  const url =
    'https://wr88-hello-rails-back-end.herokuapp.com/greetings/random';
  const response = await fetch(url, { method: 'GET' });
  return response.json();
});

const initialState = {
  value: 'Hi',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGreet.fulfilled]: (state, action) => {
      state.value = action.payload.message;
    },
  },
});

export default greetingSlice.reducer;

export { fetchGreet };
