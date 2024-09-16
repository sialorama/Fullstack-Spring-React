import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await axios.get(`http://localhost:8080/users/${id}`);
                setUser(result.data);
                setLoading(false);
            } catch (err) {
                setError('Une erreur est survenue lors du chargement des informations de l\'utilisateur.');
                console.error('Erreur lors du chargement de l\'utilisateur', err);
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put(`http://localhost:8080/users/${id}`, user);
            navigate('/'); // Rediriger vers la page d'accueil après la mise à jour
        } catch (err) {
            setError('Une erreur est survenue lors de la mise à jour de l\'utilisateur.');
            console.error('Erreur lors de la mise à jour de l\'utilisateur', err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Chargement des informations de l'utilisateur...</p>;

    return (
        <div className='container'>
            <div className='py-4'>
                <h2>Modifier l'utilisateur</h2>
                {error && <p className='text-danger'>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Nom</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='form-control'
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'>Prénom</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            className='form-control'
                            value={user.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='form-control'
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit' className='btn btn-primary' disabled={loading}>
                        {loading ? 'Enregistrement...' : 'Enregistrer'}
                    </button>
                </form>
            </div>
        </div>
    );
}
