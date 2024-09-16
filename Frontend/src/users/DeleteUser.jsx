import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importer PropTypes

function DeleteUser({ userId }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (!window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
            return;
        }

        setLoading(true);
        try {
            await axios.delete(`http://localhost:8080/users/${userId}`);
            navigate('/'); // Rediriger vers la page d'accueil après suppression
        } catch (err) {
            setError('Une erreur est survenue lors de la suppression de l\'utilisateur.');
            console.error('Erreur lors de la suppression de l\'utilisateur', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <h2>Supprimer l'utilisateur</h2>
                {loading && <p>Suppression en cours...</p>}
                {error && <p className='text-danger'>{error}</p>}
                <button className='btn btn-danger' onClick={handleDelete} disabled={loading}>
                    Supprimer
                </button>
            </div>
        </div>
    );
}

// Définir les PropTypes
DeleteUser.propTypes = {
    userId: PropTypes.number.isRequired // Définir userId comme étant un nombre requis
};

export default DeleteUser;
