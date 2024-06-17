import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // import useHistory hook from react-router-dom
import MFLogo from "../assets/MFLogo.webp";
import LoginForm from "../components/Login";

const IntroPage = () => {
  // const isLoggedIn = false; // Replace with actual login check
  const [showIntro, setShowIntro] = useState(true);
  // const navigate = useNavigate(); // useHistory hook for navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="fullscreen-intro">
          <img src={MFLogo} alt="Intro Logo" className="fullscreen-logo" />
        </div>
      )}

      <div className="intro-page">
        <LoginForm /> {/* Render LoginForm instead of a button */}
      </div>
    </>
  );
};

export default IntroPage;
