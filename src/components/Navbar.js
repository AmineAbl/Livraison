// Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';

function Navbar() {
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  const toggleBlogDropdown = () => {
    setBlogDropdownOpen(!blogDropdownOpen);
    if (pagesDropdownOpen) setPagesDropdownOpen(false);
  };

  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!pagesDropdownOpen);
    if (blogDropdownOpen) setBlogDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Left Navigation Links */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Center Logo */}
        <Link className="navbar-brand logo-container" to="/">
          <div className="logo-background">
            <div className="logo-circle"></div>
            <div className="logo-text">Burger</div>
          </div>
        </Link>

        {/* Right Social Icons and Phone */}
        <ul className="navbar-nav social-container">
        <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="phone-button" href="tel:+212623679219">+212 623679219</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
