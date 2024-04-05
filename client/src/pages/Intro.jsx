import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // import useHistory hook from react-router-dom
import MFLogo from '../assets/MFLogo.webp';
import IntroAudio from '../assets/BidenIntro.mp3'; // Import your audio file


const IntroPage = () => {
  const isLoggedIn = false; // Replace with actual login check
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate(); // useHistory hook for navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const navigateToAuth = () => {
    navigate('/auth'); // navigate to the authentication page
  };

  return (
    <>
      {showIntro && (
        <div className="fullscreen-intro">
          <img src={MFLogo} alt="Intro Logo" className="fullscreen-logo" />
          <audio autoPlay>
            <source src={IntroAudio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      <div className={`intro-page ${showIntro ? 'hidden' : ''}`}>
        {!isLoggedIn && (
          <button onClick={navigateToAuth}>Login/Signup</button>
        )}
      </div>
    </>
  );
};

export default IntroPage;
