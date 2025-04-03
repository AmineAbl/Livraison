import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../assets/css/Navbar.css';
import { FaUser, FaShoppingCart, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

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
        {/* Toggler for small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Left Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">
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

          {/* Right Navigation: Profile, Cart, and Social Links */}
          <ul className="navbar-nav social-container">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/profile">
                <FaUser /> 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/cart">
                <FaShoppingCart /> 
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/login">
                Login
              </NavLink>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
