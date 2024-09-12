import React, { useState, useEffect } from 'react';

export default function Home() {
    // Example users data
    const [users, setUsers] = useState([
        
    ]);
    
    useEffect(() => {
            loadUsers();
    }, []);

    const loadUsers=async() => {
        const result=await axios.get("http://localhost:8080/users");
        console.log(result)
    }

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>Visualiser</button>
                                        <button className='btn btn-outline-primary mx-2'>Modifier</button>
                                        <button className='btn btn-danger mx-2'>Supprimer</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
