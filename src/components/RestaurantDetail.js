// components/RestaurantDetail.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample product data - one array per restaurant ID
const productsByRestaurantId = {
  "1": [
    {
      id: 1,
      name: "Classic Angus Burger",
      description: "Notre burger signature avec bœuf Angus, fromage cheddar, laitue, tomate et sauce spéciale",
      price: 50,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Burger Gourmet au Bleu",
      description: "Bœuf Angus avec fromage bleu, oignons caramélisés et sauce au poivre",
      price: 70,
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Burger Végétarien",
      description: "Galette de légumes maison, avocat, roquette et sauce yaourt aux herbes",
      price: 60,
      image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "2": [
    {
      id: 1,
      name: "Margherita Classique",
      description: "Sauce tomate, mozzarella fraîche, basilic et huile d'olive extra vierge",
      price: 65,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Quattro Formaggi",
      description: "Mozzarella, gorgonzola, parmesan et ricotta sur une base de crème fraîche",
      price: 70,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Pizza Prosciutto",
      description: "Sauce tomate, mozzarella, jambon de Parme, roquette et copeaux de parmesan",
      price: 90,
      image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "3": [
    {
      id: 1,
      name: "Assortiment de Sashimi",
      description: "Sélection de sashimis frais: saumon, thon, daurade et maquereau",
      price: 65,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Maki California",
      description: "Rouleaux de riz avec avocat, concombre, surimi et tobiko",
      price: 60,
      image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Nigiri Mixte",
      description: "Assortiment de nigiris: saumon, thon, crevette et anguille",
      price: 50,
      image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "4": [
    {
      id: 1,
      name: "Tacos al Pastor",
      description: "Porc mariné aux épices, ananas, oignons et coriandre sur tortillas de maïs",
      price: 45,
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Tacos de Carne Asada",
      description: "Bœuf grillé, guacamole, pico de gallo et sauce chipotle",
      price: 35,
      image: "https://images.unsplash.com/photo-1552332386-f8dd00dc869f?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Tacos de Poisson",
      description: "Poisson blanc frit, chou rouge, crème citronnée et salsa verde",
      price: 40,
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "5": [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      description: "Spaghetti avec sauce crémeuse, pancetta, œuf et parmesan",
      price: 28,
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Lasagne Bolognaise",
      description: "Couches de pâtes, sauce bolognaise, béchamel et fromage gratinés au four",
      price: 35,
      image: "https://images.unsplash.com/photo-1619895092538-128341789043?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Penne Arrabiata",
      description: "Penne avec sauce tomate épicée, ail, piment et persil",
      price: 80,
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "6": [
    {
      id: 1,
      name: "Plateau de Fruits de Mer",
      description: "Assortiment d'huîtres, crevettes, moules et langoustines avec sauces et citron",
      price: 300,
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Filet de Saumon Grillé",
      description: "Filet de saumon grillé avec sauce au beurre blanc, servi avec légumes de saison",
      price: 180,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Risotto aux Fruits de Mer",
      description: "Risotto crémeux avec crevettes, calamars, moules et safran",
      price: 250,
      image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c1?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "7": [
    {
      id: 1,
      name: "Entrecôte Grillée",
      description: "Entrecôte de bœuf grillée, beurre maître d'hôtel, frites maison et salade",
      price: 120,
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Filet Mignon",
      description: "Filet mignon avec sauce au poivre, purée de pommes de terre et légumes grillés",
      price: 45,
      image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Côte de Bœuf pour Deux",
      description: "Côte de bœuf maturée, grillée à la perfection, servie avec sauces et accompagnements",
      price: 59.50,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ],
  "8": [
    {
      id: 1,
      name: "Buddha Bowl",
      description: "Bol composé de quinoa, avocat, légumes rôtis, houmous et graines",
      price: 55,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Burger Végétalien",
      description: "Steak de haricots noirs, guacamole, tomate et roquette dans un pain aux céréales",
      price: 77,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Curry de Légumes",
      description: "Curry de légumes de saison au lait de coco, servi avec du riz basmati",
      price: 60,
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ]
};

// Restaurant names by ID
const restaurantNames = {
  "1": "Burger Deluxe",
  "2": "Pizza Paradis",
  "3": "Sushi Sensation",
  "4": "Taco Fiesta",
  "5": "Pasta Perfection",
  "6": "Seafood Haven",
  "7": "Steakhouse Supreme",
  "8": "Vegan Vibes"
};

function RestaurantDetail() {
  const params = useParams();
  const id = params.id;
  
  // Debug logging
  useEffect(() => {
    console.log("Restaurant ID from URL:", id);
    console.log("Available restaurant IDs:", Object.keys(productsByRestaurantId));
    console.log("Products for this ID:", productsByRestaurantId[id]);
  }, [id]);
  
  // Get products for this restaurant
  const products = productsByRestaurantId[id] || [];
  const restaurantName = restaurantNames[id] || `Restaurant ${id}`;

  // Function to handle adding to cart
  const addToCart = (product) => {
    alert(`${product.name} ajouté au panier!`);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="mb-4">
        <Link to="/menu" className="btn btn-outline-secondary">
          &larr; Retour aux restaurants
        </Link>
      </div>
      
      <h2 className="text-center mb-4">{restaurantName}</h2>
      <p className="text-center mb-4">ID du restaurant: {id}</p>
      
      {products.length > 0 ? (
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-img-container" style={{ height: "200px", overflow: "hidden" }}>
                  <img 
                    src={product.image || "/placeholder.svg"} 
                    className="card-img-top" 
                    alt={product.name}
                    style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text font-weight-bold">{product.price.toFixed(2)} DH</p>
                </div>
                <div className="card-footer bg-white border-0">
                  <button 
                    className="btn btn-primary w-100"
                    onClick={() => addToCart(product)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-warning">
          <p>Aucun produit trouvé pour ce restaurant (ID: {id}).</p>
          <p>Vérifiez la console pour plus d'informations de débogage.</p>
        </div>
      )}
    </div>
  );
}

export default RestaurantDetail;