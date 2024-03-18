import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password
            });
            console.log(response.data);
            // Reset form fields
            setEmail('');
            setPassword('');
            setError('');
        } catch (error) {
            console.error(error.response.data.message);
            setError(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form  onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
