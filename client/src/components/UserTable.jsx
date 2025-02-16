import { useState, useEffect } from "react";
import { fetchUsers } from "../services/apiService";
import { subscribeToUsers, connectSocket, disconnectSocket } from "../services/socketService";


const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);  // Track loading state of loadUsers async function, prevent inconsistency view of users table creation.



    // useEffect used to run once when the component is mounted (empty dependencies state array).
    useEffect(() => {
        loadUsers();        // Load users from the backend server
        connectSocket();    // Connect to the WebSocket server to fetch new real-time added users

        subscribeToUsers((newUser) => {     // Subscribe the callback to socket.on event, adding new user to users state.
            setUsers((prevUsers) => [...prevUsers, newUser]);
        });

        return () => disconnectSocket();    // Cleanup function to disconnect the WebSocket connection
    }, []);


    // Fetch all users from the backend server once the component is mounted.
    const loadUsers = async () => {
        const response = await fetchUsers();
        setUsers(response.data);
        setLoading(false);
    };


    return (
        <div className="page-container">
            <h2>Entities List</h2>
            
            {loading ? (
                <p className="message">Loading users...</p>
            ) : users.length === 0 ? (
                <p className="message">No users available</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Favorite Tennis Player</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.city}</td>
                                <td>{user.favoriteTennisPlayer}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserTable;