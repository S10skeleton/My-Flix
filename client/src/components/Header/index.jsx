// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Styles.css'; // Import the CSS file for the Header component

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link className="header-logo" to="/">
          <h1 className="header-title">MyFlix</h1>
        </Link>
        <p className="header-description">Your Personal Video Stream</p>
      </div>
    </header>
  );
};

export default Header;
