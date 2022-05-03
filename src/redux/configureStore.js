import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingSlice';

const reducer = {
  greeting: greetingReducer,
};

const store = configureStore({
  reducer,
});

export default store;
