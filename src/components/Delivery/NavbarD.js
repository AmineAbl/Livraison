import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaHome } from 'react-icons/fa';
import '../../assets/css/SideBar.css';

function SidebarLivreur() {
  return (
    <div className="sidebar-container d-flex flex-column flex-shrink-0 p-3 bg-dark text-white">
      {/* Logo Section */}
      <Link className="d-flex justify-content-center mb-4 text-decoration-none" to="/deliveryHome">
        <div className="logo-container text-center">
          <div className="logo-background d-flex flex-column align-items-center">
            <div className="logo-circle bg-light mb-2" style={{ width: 40, height: 40, borderRadius: '50%' }}></div>
            <div className="logo-text fs-4 fw-bold text-white">Livreur</div>
          </div>
        </div>
      </Link>

      <hr className="my-4" />

      {/* Navigation Links */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/deliveryHome" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <FaHome className="me-2" />
            <span>Accueil</span>
          </NavLink>
        </li>

        <li className="nav-item mt-2">
          <NavLink to="/deliveryProfile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            <FaUser className="me-2" />
            <span>Profil</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SidebarLivreur;
