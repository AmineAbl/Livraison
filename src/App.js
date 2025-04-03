// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantCards from './components/RestaurantCards';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Login from './components/Login'; // Import du composant Login
import SignUp from './components/SignUp'; // Import du composant SignUp

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
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
          <Route path="/login" element={<Login />} />  {/* Ajout de la page Login */}
          <Route path="/signup" element={<SignUp />} /> {/* Ajout de la page SignUp */}
          <Route path="/restaurant/:id" element={<div className="p-5">Restaurant Details Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
