import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import { Navigate } from 'react-router-dom';

const LoginWithGoogle = () => {


  return <Navigate to="/" />;


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleGoogleLogin = (response) => {
    if (response && response.profileObj) {
      setUser(response.profileObj);
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Typography>Hello, {user.name}</Typography>
      ) : (
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={handleGoogleLogin}
          onFailure={(error) => console.error(error)}
        />
      )}
    </>
  );
};

export default LoginWithGoogle;
