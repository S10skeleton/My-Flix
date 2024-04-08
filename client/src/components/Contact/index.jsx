import React from 'react';

const Contact = ({ onClose }) => {
  return (
    <div className="contact-info-modal">
      <h3>Contact Information</h3>
      <h4>Shane Beaman</h4>
      <p>Email: <a href="mailto:S10Skeleton@Gmail.com" className="contact-link">S10Skeleton@Gmail.com</a></p>
      <p>Github: <a href="https://github.com/S10skeleton" className="contact-link" target="_blank" rel="noopener noreferrer">S10Skeleton</a></p>
      <p>Linkedin: <a href="https://www.linkedin.com/in/shane-beaman-07495627/" className="contact-link" target="_blank" rel="noopener noreferrer">My Profile</a></p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Contact;
