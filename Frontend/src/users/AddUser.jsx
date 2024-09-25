import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
    const navigate = useNavigate(); // Utilisé pour rediriger l'utilisateur après l'ajout
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const { name, username, email } = user;

    // Fonction pour mettre à jour l'état lors de la saisie dans les champs de formulaire
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Fonction pour soumettre le formulaire et ajouter l'utilisateur
    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/users", user);
            navigate("/"); // Rediriger vers la page d'accueil après l'ajout
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'utilisateur", error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Ajouter un utilisateur</h2>

                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Nom
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Saisissez le nom"
                                name="name"
                                value={name}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                Prénom
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Saisissez le prénom"
                                name="username"
                                value={username}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Saisissez l'adresse email"
                                name="email"
                                value={email}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Ajouter
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger mx-2"
                            onClick={() => navigate("/")}
                        >
                            Annuler
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
