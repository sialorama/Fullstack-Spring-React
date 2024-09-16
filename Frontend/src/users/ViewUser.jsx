import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewUser() {
  // Récupérer l'ID de l'utilisateur depuis les paramètres de l'URL
  const { id } = useParams();

  // État pour stocker les détails de l'utilisateur
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: ''
  });
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Charger les informations de l'utilisateur lors du montage du composant
  useEffect(() => {
    loadUser();
  }, [id]); // Dépendance sur id pour recharger si l'ID change

  // Fonction pour récupérer les détails de l'utilisateur depuis l'API
  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/users/${id}`);
      setUser(result.data); // Mise à jour de l'état avec les données récupérées
      setLoading(false); // Arrêter le chargement une fois les données récupérées
    } catch (error) {
      console.error("Erreur lors du chargement de l'utilisateur", error);
      setError("Une erreur est survenue lors du chargement des détails de l'utilisateur.");
      setLoading(false); // Arrêter le chargement même en cas d'erreur
    }
  };

  if (loading) return <p>Chargement des détails de l'utilisateur...</p>; // Afficher pendant le chargement

  if (error) return <p className='text-danger'>{error}</p>; // Afficher un message en cas d'erreur

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Détails de l'utilisateur</h2>

          {/* Affichage des détails de l'utilisateur */}
          <div className="card">
            <div className="card-header">
              Détails de l'utilisateur avec ID : {id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Nom :</b> {user.name}
                </li>
                <li className="list-group-item">
                  <b>Prénom :</b> {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email :</b> {user.email}
                </li>
              </ul>
            </div>
          </div>

          {/* Bouton pour revenir à la page d'accueil */}
          <Link className="btn btn-primary my-2" to={"/"}>
            Retour
          </Link>
        </div>
      </div>
    </div>
  );
}
