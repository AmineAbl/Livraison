import React, { useState } from "react";


const Dashboard = () => {
  const [livraisons, setLivraisons] = useState([
    { id: 1, client: "Ahmed", adresse: "Rue 123, Casablanca", statut: "En attente" },
    { id: 2, client: "Fatima", adresse: "Bd Hassan II, Rabat", statut: "En attente" },
  ]);

  const mettreAJourStatut = (id, statut) => {
    setLivraisons((prev) =>
      prev.map((livraison) =>
        livraison.id === id ? { ...livraison, statut } : livraison
      )
    );
  };

  const commencerLivraison = (id) => {
    mettreAJourStatut(id, "En cours");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Vos Livraisons</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Client</th>
            <th>Adresse</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {livraisons.map((livraison) => (
            <tr key={livraison.id}>
              <td>{livraison.id}</td>
              <td>{livraison.client}</td>
              <td>{livraison.adresse}</td>
              <td className={`fw-bold ${
                livraison.statut === "Livrée" ? "text-success" : 
                livraison.statut === "Annulée" ? "text-danger" : 
                livraison.statut === "En cours" ? "text-primary" : "text-warning"}`}>
                {livraison.statut}
              </td>
              <td>
                {livraison.statut === "En attente" && (
                  <button className="btn btn-primary" onClick={() => commencerLivraison(livraison.id)}>
                    Commencer
                  </button>
                )}
                {livraison.statut === "En cours" && (
                  <div className="d-flex gap-2">
                    <button className="btn btn-success" onClick={() => mettreAJourStatut(livraison.id, "Livrée")}>
                      Livrée
                    </button>
                    <button className="btn btn-danger" onClick={() => mettreAJourStatut(livraison.id, "Annulée")}>
                      Annulée
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
