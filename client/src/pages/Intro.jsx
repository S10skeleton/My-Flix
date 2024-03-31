import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const IntroPage = () => {
  // TODO: Determine if the user is logged in
  const isLoggedIn = false; // Replace with actual login check

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

      {/* Show login/signup options if not logged in */}
      {!isLoggedIn && (
        <div className="login-signup-options">
          <Link to="/login" className="btn btn-primary">Login</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
        </div>
      )}

      {/* Profile selection or user-specific content if logged in */}
      {isLoggedIn && (
        <div className="profile-selection">
          {/* User profile selection or user-specific content goes here */}
          <p>Select a profile...</p>
          {/* Example: <ProfileSelection /> */}
        </div>
      )}
    </div>
  );
};

export default IntroPage;
