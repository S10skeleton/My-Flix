import React from 'react';

const Contact = ({ onClose }) => {
  return (
    <div className="contact-info-modal">
      <h3>Contact Information</h3>
      <p>Email: shane@example.com</p>
      <p>Phone: 123-456-7890</p>
      {/* Add more contact details as needed */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Contact;
