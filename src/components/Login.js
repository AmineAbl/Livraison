// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css'; // Assure-toi d'avoir un fichier CSS pour le style

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    navigate('/'); // Rediriger vers la page d'accueil après connexion
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-orange">Login</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Create one</a></p>
      </div>
    </div>
  );
}

export default Login;
