// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { username, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          // Navigate to home page on successful login
          navigate('/');
          // Show success message
          alert('Login successful!');
        } else if (result.data === "Invalid Password") {
          // Show error message for invalid password
          alert('Invalid password. Please try again.');
        } else {
          // Show error message for other cases
          alert('An error occurred. Please try again later.');
        }
      })
      .catch(err => console.error(err));
  };

 

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="username">
              <strong>Name</strong>
            </label>
            <input 
              type="text"
              placeholder="username"
              autoComplete="off"
              name="username"
              className='form-control rounded-0'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input 
              type="password"
              placeholder="password"
              autoComplete="off"
              name="password"
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        
          <button type="submit" className='btn btn-success w-100 rounded-0'>
            Login
          </button>
          <a href="/Signup"><p>Create new Account</p></a>
          <Link to="/Signup"><button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Signup
          </button></Link>
        </form>
       
        
      </div>
    </div>
  );
}

export default LoginForm;