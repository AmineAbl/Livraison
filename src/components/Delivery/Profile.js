import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const [livreur, setLivreur] = useState({
    nom: "Mohamed",
    prenom: "Ali",
    email: "mohamed.ali@example.com",
    telephone: "+212 600000000",
    ville: "Casablanca",
    photo: "https://via.placeholder.com/100"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...livreur });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLivreur(formData);
    setIsEditing(false);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 text-center" style={{ maxWidth: "400px", borderRadius: "15px" }}>
        <img
          src={livreur.photo}
          alt="Profil"
          className="rounded-circle mx-auto mb-3"
          style={{ width: "100px", height: "100px" }}
        />
        <h3 className="card-title">{livreur.nom} {livreur.prenom}</h3>
        <p className="text-muted">Livreur</p>
        <hr />
        <p className="card-text"><strong>Email:</strong> {livreur.email}</p>
        <p className="card-text"><strong>Téléphone:</strong> {livreur.telephone}</p>
        <p className="card-text"><strong>Ville:</strong> {livreur.ville}</p>
        <Button className="btn btn-primary mt-3" onClick={() => setIsEditing(true)}>Modifier Profil</Button>
      </div>
      
      <Modal show={isEditing} onHide={() => setIsEditing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier Profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="form-control mb-2" placeholder="Nom" />
            <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} className="form-control mb-2" placeholder="Prénom" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control mb-2" placeholder="Email" />
            <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} className="form-control mb-2" placeholder="Téléphone" />
            <input type="text" name="ville" value={formData.ville} onChange={handleChange} className="form-control mb-2" placeholder="Ville" />
            <input type="file" className="form-control mb-2" onChange={handleFileChange} />
            <Button type="submit" className="btn btn-success mt-2">Enregistrer</Button>
            <Button variant="secondary" className="mt-2 ms-2" onClick={() => setIsEditing(false)}>Annuler</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Profile;
