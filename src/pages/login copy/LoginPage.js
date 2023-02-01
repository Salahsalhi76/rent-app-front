/*
import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import { Navigate } from 'react-router-dom';

const LoginWithGoogle = () => {



  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleGoogleLogin = (response) => {
    console.error(`succcccccccccccccccccccccccccces`)
    if (response && response.profileObj) {
      setUser(response.profileObj);
      setIsLoggedIn(true);
    }
  };

  return (
    <>
    <div style={{height:"100px"}}/>
      {isLoggedIn ? (
        <Typography>Hello, {user.name}</Typography>
      ) : (
        <GoogleLogin
          clientId='825602672601-3n7ofvpt6k7pqau121msgdstblpmofct.apps.googleusercontent.com'
          secretId= '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'          
          buttonText="Login with Google"
          onSuccess={handleGoogleLogin}
          onFailure={(error) => console.error(error)}
        />
      )}
    </>
  );
};

export default LoginWithGoogle;

*/


import './logging.css';
import GoogleLogin from 'react-google-login';
import { useEffect, useState } from 'react';
import { baseUrl } from "../../shared/shared.js";
import { authentication_controller, isAuthenticated_controller } from '../../controllers/auth_controller';
import { Navigate, useNavigate } from 'react-router-dom';


function LoginWithGoogle(props) {





  const navigate = useNavigate();







  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert("errrrrrrrrrror");
    console.log(`handleFailurehandleFailure =>  `);
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    console.log(`handleLoginhandleLogin => ${googleData.body}`);
    const res = await fetch(`${baseUrl}`, {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };






  const handleCallBackResponse = (response) => {
    console.log("Tooooooooooooooooken " + JSON.stringify(response, null, 2));
    authentication_controller();
    props.onLogin();
    navigate("/");
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: '332798989503-splh16gs4ieekvf73snlavko41j13pis.apps.googleusercontent.com',
      callback: handleCallBackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )
  }, []);

  if (isAuthenticated_controller()) {
    return <Navigate to="/" />;
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>

        <div style={{ marginTop: '50px' }}>
          {loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div id='signInDiv' />
            /*
<GoogleLogin
             clientId='332798989503-splh16gs4ieekvf73snlavko41j13pis.apps.googleusercontent.com'
              secretId='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' 
             buttonText="Log in with Google"
             onSuccess={handleLogin}
             onFailure={handleFailure}
             cookiePolicy={'single_host_origin'}
           ></GoogleLogin>
            */

          )}
        </div>
      </header>
    </div>
  );
}

export default LoginWithGoogle;


