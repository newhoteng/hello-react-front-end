import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessageItems } from '../redux/messages/messagesSlice';

function Greeting() {
  const { message, isLoading, error } = useSelector((store) => store.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessageItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <ul>
        <h1>Loading...</h1>
      </ul>
    );
  }
  if (error) {
    return (
      <ul>
        <h1>Something went wrong</h1>
      </ul>
    );
  }

  return (
    <h1>{message.text}</h1>
  );
}

export default Greeting;
