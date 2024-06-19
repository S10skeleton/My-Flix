import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import MFLogo from "../assets/MFLogo.webp";
import LoginForm from "../components/Login";

const IntroPage = () => {

  const [showIntro, setShowIntro] = useState(true);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
// intro video
  return (
    <>
      {showIntro && (
        <div className="fullscreen-intro">
          <img src={MFLogo} alt="Intro Logo" className="fullscreen-logo" />
        </div>
      )}

      <div className="intro-page">
        <LoginForm />
      </div>
    </>
  );
};

export default IntroPage;
