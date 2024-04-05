import React, { useState } from 'react';
import Contact from '../Contact'; // Adjust the path as necessary

const Footer = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleOpenContactInfo = () => {
    setShowContactInfo(true);
  };

  const handleCloseContactInfo = () => {
    setShowContactInfo(false);
  };

  return (
    <footer className="footer">
      <div>
        <h4>My Flix was Created By Shane Beaman, Signup<br></br> is
        Restricted Please <span onClick={handleOpenContactInfo} className="contact-link">Contact Here</span> to Inquire </h4>
      </div>
      {showContactInfo && <Contact onClose={handleCloseContactInfo} />}
    </footer>
  );
};

export default Footer;
