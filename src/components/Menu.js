import React from 'react';
import { Link } from 'react-router-dom';

const restaurants = [
  {
    id: 1,
    title: "Burger Deluxe",
    description: "Burgers gastronomiques préparés avec du bœuf Angus de première qualité et des ingrédients frais et locaux. Notre sauce signature est une recette secrète de famille.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "/restaurant/burger-deluxe"
  },
  {
    id: 2,
    title: "Pizza Paradis",
    description: "Pizzas italiennes authentiques cuites dans un four à bois. Notre pâte est préparée fraîche chaque jour et garnie avec les meilleurs ingrédients.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "/restaurant/pizza-paradis"
  },
  {
    id: 3,
    title: "Sushi Sensation",
    description: "Sushis frais et de haute qualité préparés par notre maître sushi avec plus de 20 ans d'expérience. Savourez le goût authentique du Japon.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "/restaurant/sushi-sensation"
  },
  {
    id: 4,
    title: "Taco Fiesta",
    description: "Tacos mexicains traditionnels avec une touche moderne. Nos sauces maison et nos ingrédients frais créent une explosion de saveurs.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    link: "/restaurant/taco-fiesta"
  },
  {
    id: 5,
    title: "Pasta Perfection",
    description: "Pâtes italiennes faites maison accompagnées de sauces crémeuses et de délicieux ingrédients locaux. Venez savourer le vrai goût de l'Italie.",
    image: "https://thumbs.dreamstime.com/b/savor-art-perfectly-twirled-spaghetti-concept-italian-cuisine-pasta-perfection-culinary-delight-twirling-309982585.jpg",
    link: "/restaurant/pasta-perfection"
  },
  {
    id: 6,
    title: "Seafood Haven",
    description: "Un restaurant de fruits de mer avec des produits frais, allant des huîtres à la langouste, préparés de manière artisanale et servies avec passion.",
    image: "https://tb-static.uber.com/prod/image-proc/processed_images/b060834a94b314975d9147d6212a8f47/8a42ee7a692dfa4155879820804a277f.webp",
    link: "/restaurant/seafood-haven"
  },
  {
    id: 7,
    title: "Steakhouse Supreme",
    description: "Dégustez des steaks de première qualité grillés à la perfection, servis avec des accompagnements raffinés. L'expérience de la viande comme jamais auparavant.",
    image: "https://www.pymnts.com/wp-content/uploads/2020/10/steak-restaurants-innovation.jpg",
    link: "/restaurant/steakhouse-supreme"
  },
  {
    id: 8,
    title: "Vegan Vibes",
    description: "Un menu 100% végétalien avec des plats créatifs et savoureux. Des légumes frais et des ingrédients locaux pour une cuisine saine et gourmande.",
    image: "https://cdn.pixabay.com/photo/2017/06/05/14/04/eggplant-2374163_1280.jpg",
    link: "/restaurant/vegan-vibes"
  }
];

// Composant individuel de carte de restaurant
function RestaurantCard({ restaurant }) {
  return (
    <div className="col-md-6 col-lg-3 mb-4">
      <div className="card restaurant-card h-100">
        <div className="card-img-container">
          <img src={restaurant.image || "/placeholder.svg"} className="card-img-top" alt={restaurant.title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{restaurant.title}</h5>
          <p className="card-text">{restaurant.description}</p>
        </div>
        <div className="card-footer bg-white border-0">
          <Link to={restaurant.link} className="btn btn-primary see-btn">
            Voir Plus
          </Link>
        </div>
      </div>
    </div>
  );
}

// Composant conteneur des cartes de restaurants
function Menu() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Nos Restaurants en Vedette</h2>
      <div className="row">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
