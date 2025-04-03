// Contact.js
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../assets/css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    setFormSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p>Nous serions ravis de vous entendre</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="contact-info-container">
              <h2 className="section-title">Entrer en contact</h2>
              <p>Avez-vous des questions, des commentaires ou souhaitez-vous faire une réservation ? Contactez-nous.</p>
              
              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h3>Adresse</h3>
                  <p>123 Rue des Burgers<br />Paris, 75001</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h3>Appelez-nous</h3>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h3>Email</h3>
                  <p>contact@burgerparis.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <FaClock className="contact-icon" />
                <div>
                  <h3>Horaires de travail</h3>
                  <p>Lundi - Vendredi : 11h - 22h<br />Samedi - Dimanche : 10h - 23h</p>
                </div>
              </div>
              
              <div className="social-links mt-4">
                <h3>Suivez-nous</h3>
                <div className="d-flex gap-3 mt-2">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaFacebook />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaTwitter />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="contact-form-container">
              <h2 className="section-title">Envoyez-nous un message</h2>
              
              {formSubmitted && (
                <div className="alert alert-success" role="alert">
                  Merci pour votre message ! Nous vous répondrons bientôt.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Votre nom</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Votre email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Sujet</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
