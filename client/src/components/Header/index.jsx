// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Styles.css';
import MFLogo from '../../assets/MFLogo.webp'

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={MFLogo} alt="MF Logo" className="header-logo" />
      </Link>      <h1>My Flix</h1>
      <p>Your Personal Video <br /> Streaming Platform</p>
    </header>
  );
};

export default Header;