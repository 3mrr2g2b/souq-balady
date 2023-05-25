import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  const responseGoogle = (response) => {
    console.log(response);
    if (response.profileObj) {
      setIsLoggedIn(true);
      setUserProfile(response.profileObj);
    } else {
      setIsLoggedIn(false);
      setUserProfile(null);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserProfile(null);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p onClick={handleLogout}>Logout</p>
          <span>{userProfile?.name}</span>
          <FaSignOutAlt />
        </div>
      ) : (
        <GoogleLogin
          className='googleButton'
          clientId="927049943537-c97thbti4vr484b1sc96l200p1u8eif7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
};

export default Login;
