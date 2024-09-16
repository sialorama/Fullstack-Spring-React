import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const result = await axios.get("http://localhost:8080/users");
            setUsers(result.data);
        } catch (error) {
            setError("Erreur lors du chargement des utilisateurs.");
            console.error("Erreur lors du chargement des utilisateurs", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <p>Chargement des utilisateurs...</p>;
    if (error) return <p className="text-danger">{error}</p>;
    if (users.length === 0) return <p>Aucun utilisateur trouvé.</p>;

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">
                                    {index + 1}
                                </th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/viewuser/${user.id}`} className='btn btn-primary mx-2'>
                                        Visualiser
                                    </Link>
                                    <Link to={`/edituser/${user.id}`} className='btn btn-outline-primary mx-2'>
                                        Modifier
                                    </Link>
                                    <button className='btn btn-danger mx-2'>
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
