import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreet } from '../redux/greetings/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector((store) => store.greeting.value);
  console.log('greet', greet);

  const handleClick = () => {
    const num = Math.floor(Math.random() * 5 + 1);
    dispatch(fetchGreet(num));
  };

  return (
    <div>
      <button onClick={handleClick}>Greet me!</button>
      <h2>{greet}</h2>
    </div>
  );
};

export default Greeting;
