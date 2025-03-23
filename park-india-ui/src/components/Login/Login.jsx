import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {

    


  return (
    
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>

        <Link>create new Account</Link>
      </form>
    </div>
  );
};

export default Login;
