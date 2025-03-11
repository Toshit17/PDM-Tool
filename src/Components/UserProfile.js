
// UserProfile.js
import React, { useState } from 'react';
import './UserProfile.css'; // If you have separate CSS for this component

const UserProfile = () => {
  const [showNav, setShowNav] = useState(false); // State to show navigation header

  // Function to handle User Profile click
  const handleProfileClick = () => {
    setShowNav(true); // Show the navigation header
  };

  return (
    <div className="user-profile-container">
      <button onClick={handleProfileClick} className="profile-btn">
        User Profile
      </button>

      {/* Conditionally show the navigation header when clicked */}
      {showNav && (
        <div className="navigation-header">
          <ul className="nav-links">
            <li><a href="#profile-details">Profile Details</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;