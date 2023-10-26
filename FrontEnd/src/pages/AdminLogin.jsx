// AdminLogin.jsx

import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (username === "admin" && password === "password") {  // This is just for the demo. Please use proper authentication in real-world scenarios.
            console.log("Logged in successfully");
            // Redirect to the admin dashboard or other desired location
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="admin-login-container">
            <h2>Admin Login</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default AdminLogin;
