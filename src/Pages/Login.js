import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();
  //point to where the usuer initial was
  const referer = '/';
  console.log(referer);

  function postLogin() {
    axios
      .post('https://localhost3000/login', {
        userName,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <div>
      <form>
        <input
          type='username'
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          placeholder='email'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder='password'
        />
        <button onClick={postLogin}> Log In</button>
      </form>
      <Link to='/signup'>Don't have an account?</Link>
      {isError && (
        <span>The username or password provided were incorrect!</span>
      )}
    </div>
  );
}

export default Login;
