// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarLivreur from './components/Delivery/NavbarD'; // Navbar pour le livreur
import NavbarClient from './components/Navbar'; // Navbar pour le client
import RestaurantCards from './components/RestaurantCards';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Delivery/Dashboard';
import Profile from './components/Delivery/Profile';

function App() {
  // Vérification de l'URL actuelle
  const currentPath = window.location.pathname;

  // Fonction pour afficher la navbar en fonction de l'URL
  const renderNavbar = () => {
    if (currentPath === "/deliveryHome" || currentPath === "/deliveryProfile") {
      return <NavbarLivreur />;
    } else {
      return <NavbarClient />;
    }
  };

  return (
    <Router>
      <div className="App">
        {/* Affichage de la navbar en fonction de l'URL */}
        {renderNavbar()}

        <Routes>
          {/* Routes pour le client */}
          <Route path="/" element={
            <>
              <div className="hero-section">
                <h1>Welcome to Burger World</h1>
                <p>Discover the best restaurants in town</p>
              </div>
              <RestaurantCards />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/restaurant/:id" element={<div className="p-5">Restaurant Details Page</div>} />
          
          {/* Routes pour le livreur */}
          <Route path="/deliveryHome" element={<Dashboard />} />
          <Route path="/deliveryProfile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
