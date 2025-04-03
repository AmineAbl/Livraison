import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../../assets/css/Navbar.css';

function NavbarLivreur() {
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
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/accueil">
                Accueil
              </NavLink>
            </li>
          </ul>

          {/* Center Logo */}
          <Link className="navbar-brand logo-container" to="/accueil">
            <div className="logo-background">
              <div className="logo-circle"></div>
              <div className="logo-text">Livreur</div>
            </div>
          </Link>

          {/* Right Navigation: Profile */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/profile">
                <FaUser /> Profil
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLivreur;
