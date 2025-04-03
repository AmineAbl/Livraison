// components/SignUp.js
import React, { useState } from 'react';
import '../assets/css/Signup.css'
function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userType: 'client' // Par défaut, l'utilisateur sera un "client"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Tu peux ajouter ici la logique pour envoyer les données au backend
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Nom</label>
          <input
            type="text"
            id="firstName"
            name="nom"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Prénom</label>
          <input
            type="text"
            id="lastName"
            name="prenom"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Type d'utilisateur</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="client">Client</option>
            <option value="livreur">Livreur</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Créer un compte</button>
      </form>
    </div>
  );
}

export default SignUp;
