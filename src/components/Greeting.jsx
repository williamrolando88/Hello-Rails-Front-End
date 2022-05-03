import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreet } from '../redux/greetings/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector((store) => store.greeting.value);

  return (
    <div>
      <button onClick={() => dispatch(fetchGreet())}>Greet me!</button>
      <h2>{greet}</h2>
    </div>
  );
};

export default Greeting;
