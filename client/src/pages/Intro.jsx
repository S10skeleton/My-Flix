import React, { useState } from 'react';
import Login from '../components/Login'; // No need to specify index.jsx, it's inferred
import Signup from '../components/Signup'; // Adjust the path as per your project structure


const IntroPage = () => {
  // TODO: Determine if the user is logged in
  const isLoggedIn = false; // Replace with actual login check
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="intro-page">
      <div className="intro-header">
        {/* Animated GIF or Image */}
        <img
          src="path_to_your_animated_gif_or_image.gif"
          alt="Intro Animation"
          className="intro-animation"
        />
      </div>



      {!isLoggedIn && (
        <div className="login-signup-options">
          <button onClick={() => setShowLogin(true)}>Login</button>
          <button onClick={() => setShowSignup(true)}>Sign Up</button>
        </div>
      )}

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </div>
  );
};

export default IntroPage;
