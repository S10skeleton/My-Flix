import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <Login />
      <Signup />
    </div>
  );
};

export default AuthPage;
