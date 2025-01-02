import "../Comps.css/Header.css";
import React from 'react';
import useWindowSize from './useWindowSize'; // Import the custom hook

const Header = () => {
  const { width } = useWindowSize(); // Get the window width from the hook

  // Check if the screen width is greater than 844px to show .nav
  if (width <= 844) {
    return (
      <div className="header-container">
        <div className="logo-text">SquaredTriangles</div>
        <div className="logo"></div>
        {/* Only render the logo and text, without .nav */}
      </div>
    );
  }

  return (
    <div className="header-container">
      <div className="logo-text">SquaredTriangles</div>
      <div className="logo"></div>
      {/* Render .nav only for screen width > 844px */}
      <div className="nav">
        <button className="nav-learn">Learn</button>
        <button className="nav-new">New</button>
        <button className="nav-pricing">Pricing</button>
        <button className="nav-blog">Blog</button>
        <button className="nav-sign-in">Sign In</button>
      </div>
    </div>
  );
};

export default Header;
