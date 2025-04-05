import React from 'react';
import '../assets/css/HomePage.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      {/* Section Héro */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center hh">
            <div className="col-md-6 ">
              <h1>De la nourriture délicieuse livrée à votre porte</h1>
              <p>Commandez dans vos restaurants préférés et faites livrer votre repas en quelques minutes.</p>
              <div className="search-container">
                <input type="text" className="form-control" placeholder="Entrez votre adresse de livraison" />
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://static.vecteezy.com/ti/vecteur-libre/p1/19796973-moto-livraison-homme-logo-icone-symbole-vecteur-modele-gratuit-vectoriel.jpg" alt="Livraison de nourriture" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Section Catégories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Explorer les Catégories</h2>
          <div className="row">
            {['Pizza', 'Burgers', 'Sushi', 'Desserts', 'Sain', 'Mexicain'].map((category) => (
              <div className="col-6 col-md-4 col-lg-2" key={category}>
                <div className="category-card">
                  <div className="category-icon">
                    <i className="bi bi-egg-fried"></i>
                  </div>
                  <h3>{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Comment ça marche */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">Comment ça marche</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="step-card">
                <div className="step-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h3>Définir votre emplacement</h3>
                <p>Entrez votre adresse et nous vous montrerons les restaurants qui livrent chez vous.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card">
                <div className="step-icon">
                  <i className="bi bi-basket"></i>
                </div>
                <h3>Choisir votre repas</h3>
                <p>Parcourez les menus de centaines de restaurants et passez votre commande en quelques clics.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="step-card">
                <div className="step-icon">
                  <i className="bi bi-truck"></i>
                </div>
                <h3>Recevez la livraison de votre repas</h3>
                <p>Votre commande sera livrée à votre porte en quelques minutes. Bon appétit !</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offres Spéciales */}
      <section className="offers-section">
        <div className="container">
          <h2 className="section-title">Offres Spéciales</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="offer-card">
                <div className="offer-content">
                  <h3>50% DE RÉDUCTION</h3>
                  <p>Sur votre première commande</p>
                  <button className="btn btn-light"><Link to="/menu" className="btn btn-outline-primary">Commander maintenant</Link></button>
                </div>
                <div className="offer-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPW9KvnEOuSb1i-TyOub2aNMefaxf_0JBPPA&s" alt="Offre spéciale" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="offer-card">
                <div className="offer-content">
                  <h3>Livraison Gratuite</h3>
                  <p>Sur les commandes de plus de 80 DH</p>
                  <button className="btn btn-light"><Link to="/menu" className="btn btn-outline-primary">Commander maintenant</Link></button>
                </div>
                <div className="offer-image">
                  <img src="https://gerdetect.fr/wp-content/uploads/2017/10/gerdetect-livraison-gratuite.png" alt="Offre spéciale" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>FoodDelivery</h3>
              <p>Le meilleur service de livraison de nourriture en ville. Commandez maintenant et savourez des repas délicieux de vos restaurants préférés.</p>
              <div className="social-icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Liens rapides</h4>
              <ul className="footer-links">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Restaurants</a></li>
                <li><a href="#">Promotions</a></li>
                <li><a href="#">Contactez-nous</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Légal</h4>
              <ul className="footer-links">
                <li><a href="#">Termes et conditions</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
                <li><a href="#">Politique de remboursement</a></li>
                <li><a href="#">Politique sur les cookies</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Contactez-nous</h4>
              <ul className="contact-info">
                <li><i className="bi bi-geo-alt"></i> 123 rue de la livraison, Food City</li>
                <li><i className="bi bi-telephone"></i> +1 (555) 123-4567</li>
                <li><i className="bi bi-envelope"></i> info@fooddelivery.com</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2023 FoodDelivery. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
