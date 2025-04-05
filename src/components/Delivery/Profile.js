import React, { useState } from 'react';
import '../../assets/css/ProfileC.css';
import '../../assets/css/SideBar.css';
function ProfileLivreur() {
  // État pour gérer les données du profil
  const [profile, setProfile] = useState({
    name: "Kenneth Valdez",
    email: "fip@jukmuh.al",
    phone: "(239) 816-9029",
    mobile: "(320) 380-4539",
    address: "Bay Area, San Francisco, CA",
    image: "https://bootdey.com/img/Content/avatar/avatar7.png" // Ajout de l'image par défaut
  });

  // État pour gérer l'ouverture de la modale
  const [showModal, setShowModal] = useState(false);

  // Fonction pour ouvrir la modale
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Fonction pour fermer la modale
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Gérer les modifications des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Gérer le changement d'image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prevState => ({
          ...prevState,
          image: reader.result // Met à jour l'image avec la nouvelle image téléchargée
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Soumettre le formulaire et mettre à jour les données
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Par exemple, on pourrait envoyer les données mises à jour à un serveur ici
    alert('Profil mis à jour !');
    handleCloseModal();
  };

  return (
    <div className="container page-content">
      <div className="main-body">

        <div className="row gutters-sm">
          {/* Section Profil */}
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={profile.image}
                    alt="Profil"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>{profile.name}</h4>
                    <p className="text-secondary mb-1">Développeur Full Stack</p>
                    <p className="text-muted font-size-sm">{profile.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Information */}
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3"><h6 className="mb-0">Nom complet</h6></div>
                  <div className="col-sm-9 text-secondary">{profile.name}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3"><h6 className="mb-0">Email</h6></div>
                  <div className="col-sm-9 text-secondary">{profile.email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3"><h6 className="mb-0">Téléphone</h6></div>
                  <div className="col-sm-9 text-secondary">{profile.phone}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3"><h6 className="mb-0">Adresse</h6></div>
                  <div className="col-sm-9 text-secondary">{profile.address}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    {/* Bouton pour ouvrir la modale */}
                    <button className="btn btn-info" onClick={handleOpenModal}>
                      Modifier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modale Edit */}
        {showModal && (
          <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modifier le profil</h5>
                  <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSaveChanges}>
                    <div className="form-group">
                      <label htmlFor="name">Nom complet</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Téléphone</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Adresse</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={profile.address}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Nouveau champ pour changer l'image */}
                    <div className="form-group">
                      <label htmlFor="image">Image de profil</label>
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Enregistrer les modifications</button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Fermer</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileLivreur;
