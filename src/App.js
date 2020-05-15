import React, { useState, useEffect } from 'react';

import './style.css';

import Home from './Pages/Home';
import User from './Pages/User';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PrivateRoute from './components/Auth/PrivateRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Route path='/' exact={true} component={Home} />
        <PrivateRoute path='/admin' component={User} />

        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
