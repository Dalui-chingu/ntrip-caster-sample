// Login.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., make a request to your backend)
    console.log('Logging in...', email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
<Link to={'/dash'}><button type="submit">Login</button></Link>
        
      </form>
    </div>
  );
};

export default Login;
