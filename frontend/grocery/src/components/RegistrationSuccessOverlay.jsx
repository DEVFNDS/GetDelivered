import React from 'react';


const RegistrationSuccessOverlay = ({ onClose }) => {
  return (
    <div className="register-overlay-container">
      <div className="register-overlay-content">
        <h2>Registration Successful!</h2>
        <p>Thank you for registering.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RegistrationSuccessOverlay;
