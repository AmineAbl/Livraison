import React from 'react';
import { useParams } from 'react-router-dom';

// Données d'exemple des restaurants (ce sont les mêmes données que dans RestaurantCards.js)
const restaurants = [
  {
    id: 1,
    title: "Burger Deluxe",
    description: "Burgers gastronomiques préparés avec du bœuf Angus de première qualité et des ingrédients frais et locaux. Notre sauce signature est une recette secrète de famille.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    menu: [
      { id: 1, name: 'Burger Classique', description: 'Burger avec bœuf Angus, fromage, salade et sauce secrète', price: 90, image: 'https://via.placeholder.com/200x150?text=Burger+Classique' },
      { id: 2, name: 'Burger Veggie', description: 'Burger végétarien avec légumes frais et sauce maison', price: 75, image: 'https://via.placeholder.com/200x150?text=Burger+Veggie' }
    ]
  },
  {
    id: 2,
    title: "Pizza Paradis",
    description: "Pizzas italiennes authentiques cuites dans un four à bois. Notre pâte est préparée fraîche chaque jour et garnie avec les meilleurs ingrédients.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    menu: [
      { id: 1, name: 'Pizza Margherita', description: 'Pizza avec sauce tomate, mozzarella, basilic', price: 60, image: 'https://via.placeholder.com/200x150?text=Pizza+Margherita' },
      { id: 2, name: 'Pizza Pepperoni', description: 'Pizza avec sauce tomate, mozzarella et pepperoni', price: 80, image: 'https://via.placeholder.com/200x150?text=Pizza+Pepperoni' }
    ]
  },
  {
    id: 3,
    title: "Sushi Sensation",
    description: "Sushis frais et de haute qualité préparés par notre maître sushi avec plus de 20 ans d'expérience. Savourez le goût authentique du Japon.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    menu: [
      { id: 1, name: 'Sushi Rolls', description: 'Sushis avec saumon frais et avocat', price: 85, image: 'https://via.placeholder.com/200x150?text=Sushi+Rolls' },
      { id: 2, name: 'Sashimi', description: 'Tranches de poisson cru frais', price: 95, image: 'https://via.placeholder.com/200x150?text=Sashimi' }
    ]
  },
  {
    id: 4,
    title: "Taco Fiesta",
    description: "Tacos mexicains traditionnels avec une touche moderne. Nos sauces maison et nos ingrédients frais créent une explosion de saveurs.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    menu: [
      { id: 1, name: 'Taco au Bœuf', description: 'Taco avec bœuf grillé, fromage, et salsa', price: 50, image: 'https://via.placeholder.com/200x150?text=Taco+au+Boef' },
      { id: 2, name: 'Taco au Poulet', description: 'Taco avec poulet épicé, guacamole, et fromage', price: 55, image: 'https://via.placeholder.com/200x150?text=Taco+au+Poulet' }
    ]
  }
];

function RestaurantDetails() {
  // Utilisation de useParams() pour obtenir l'id du restaurant dans l'URL
  const { id } = useParams();

  // Recherche du restaurant par son id
  const restaurant = restaurants.find(resto => resto.id === parseInt(id));

  if (!restaurant) {
    return <div>Restaurant non trouvé</div>;
  }

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <img src={restaurant.image} alt={restaurant.title} className="img-fluid" />
        <h2>{restaurant.title}</h2>
        <p>{restaurant.description}</p>
      </div>
      <h3>Menu</h3>
      <div className="row">
        {restaurant.menu.map(item => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} alt={item.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="price">{item.price} DH</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantDetails;
