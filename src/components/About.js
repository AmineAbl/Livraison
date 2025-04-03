// About.js (Version Française)
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaHistory, FaAward, FaUsers } from 'react-icons/fa';
import '../assets/css/About.css';

function About() {
  return (
    <div className="about-page">
      {/* Section Héros */}
      <div className="about-hero">
        <div className="container">
          <h1>À Propos de Nous</h1>
          <p>Notre histoire, notre mission et notre passion pour la bonne cuisine</p>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="container my-5">
        <div className="row">
          {/* Colonne Gauche - Texte */}
          <div className="col-lg-6">
            <h2 className="section-title">Notre Histoire</h2>
            <p className="lead">
              Fondé en 2010, Burger World a commencé comme un petit restaurant familial avec un grand rêve.
            </p>
            <p>
              Ce qui était à l'origine un seul établissement en centre-ville est devenu une chaîne de restaurants 
              appréciée dans tout le pays. Notre parcours a été guidé par notre passion pour la création de plats 
              délicieux et de haute qualité, ainsi que par notre engagement envers un service exceptionnel.
            </p>
            <p>
              Au fil des années, nous avons perfectionné nos recettes, sélectionné les meilleurs ingrédients et construit 
              une équipe de professionnels dévoués partageant notre vision. Notre quête d'excellence nous a valu de 
              nombreuses récompenses, mais surtout, la fidélité de nos clients.
            </p>
            
            <h2 className="section-title mt-4">Notre Mission</h2>
            <p>
              Chez Burger World, notre mission est simple : offrir des expériences culinaires mémorables grâce 
              à une cuisine exceptionnelle, une hospitalité chaleureuse et une ambiance conviviale. Nous croyons 
              qu'un bon repas peut rassembler les gens et créer des souvenirs inoubliables.
            </p>

            <div className="cta-container mt-4">
              <Link to="/menu" className="btn btn-primary cta-button">
                Découvrez Notre Menu
              </Link>
            </div>
          </div>

          {/* Colonne Droite - Image et Points Forts */}
          <div className="col-lg-6">
            <div className="about-image-container mb-4">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Intérieur du restaurant" 
                className="img-fluid about-image"
              />
            </div>

            {/* Boîtes de Caractéristiques */}
            <div className="row features-container">
              <div className="col-md-6 mb-4">
                <div className="feature-box">
                  <FaUtensils className="feature-icon" />
                  <h3>Ingrédients de Qualité</h3>
                  <p>Nous sélectionnons uniquement les meilleurs ingrédients pour nos plats.</p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="feature-box">
                  <FaHistory className="feature-icon" />
                  <h3>Tradition et Innovation</h3>
                  <p>Nos recettes allient techniques traditionnelles et touches modernes.</p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="feature-box">
                  <FaAward className="feature-icon" />
                  <h3>Récompensé</h3>
                  <p>Nous sommes reconnus pour l'excellence de notre cuisine et notre service client.</p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="feature-box">
                  <FaUsers className="feature-icon" />
                  <h3>Engagé envers la Communauté</h3>
                  <p>Nous soutenons les initiatives locales et adoptons des pratiques durables.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Équipe */}
      <div className="team-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Rencontrez Notre Équipe</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="team-member">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80" 
                  alt="Chef Exécutif" 
                  className="team-img"
                />
                <h3>John Doe</h3>
                <p className="position">Chef Exécutif</p>
                <p className="team-bio">Avec plus de 15 ans d'expérience culinaire, John apporte créativité et expertise à chaque plat.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-member">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80" 
                  alt="Responsable du Restaurant" 
                  className="team-img"
                />
                <h3>Jane Smith</h3>
                <p className="position">Responsable du Restaurant</p>
                <p className="team-bio">Jane veille à ce que chaque client bénéficie d'un service exceptionnel et d'une expérience mémorable.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="team-member">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=384&q=80" 
                  alt="Fondateur" 
                  className="team-img"
                />
                <h3>Michael Johnson</h3>
                <p className="position">Fondateur</p>
                <p className="team-bio">La vision et la passion de Michael pour la bonne cuisine ont conduit à la création de Burger World en 2010.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Appel à l'Action */}
      <div className="cta-section text-center py-5">
        <div className="container">
          <h2>Prêt à déguster nos délicieux plats ?</h2>
          <p className="mb-4">Visitez l'un de nos restaurants ou commandez en ligne dès aujourd'hui !</p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/locations" className="btn btn-primary cta-button">Trouver un Restaurant</Link>
            <Link to="/menu" className="btn btn-outline-primary cta-button-outline">Commander en Ligne</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
