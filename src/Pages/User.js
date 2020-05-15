import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function User(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <h1>Hello from User</h1>
      <button onClick={logOut}> Log Out</button>
    </div>
  );
}
