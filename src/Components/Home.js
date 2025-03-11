
import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [showNav, setShowNav] = useState(false); // State to control showing navigation header

  const [showSec, setShowSec] = useState(false); // State to control showing navigation header

  // Function to handle the "User Profile" click
  const handleUserProfileClick = () => {
    setShowNav(true); // Show navigation header when "User Profile" is clicked
    setShowSec(false); // Show navigation header when "User Profile

  };

  const handleProjectManaegmentClick = () => {
    setShowNav(false); // Show navigation header when "User Profile" is clicked
    setShowSec(true); // Show navigation header when "User Profile" is clicked
  };


  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Menu</h2>
        <ul className="sidebar-links">
          <li><a href="#user-profile" onClick={handleUserProfileClick}>User Profile</a></li> {/* User Profile section */}
          <li><a href="#project-management" onClick={handleProjectManaegmentClick}>Project Management</a></li> {/* Project Management section */}

        </ul>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <h2 className='main-header'>Deloitte Data Migration Accelerator</h2>
        <p className='main-para'>This is where we display important information and features.</p>

        {/* Display Navigation Header if "User Profile" is clicked */}
        {showNav && (
          <div className='showNav'>
        
            <h2>This is a User Profile Section.</h2>

          <div className="navigation-header">
            
            {/* <p>This is where we display important information and features.</p> */}
            <ul className="nav-links">
              <li><a href="#Initialization">Initialization</a></li>
              <li><a href="#Extract">Extract</a></li>
              <li><a href="#Mapping">Mapping</a></li>
              <li><a href="#Transform">Transform</a></li>
              <li><a href="#Load">Load</a></li>
              <li><a href="#Validation">Validation</a></li>

            </ul>
          </div>
          </div>
        )}

          {showSec && (
          
          <div className="header">

            {/* <p>This is where we display important information and features.</p> */}
            <h2>This is a Project Management Section.</h2>

            {/* Additional content goes here */}
            <div className="feature">
              <h3>Feature 1</h3>
              <p>Description of feature 1.</p>
            </div>
            <div className="feature">
              <h3>Feature 2</h3>
              <p>Description of feature 2.</p>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default Home;
 
