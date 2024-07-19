// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function SignupForm() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { username, email, password })
      .then(result => {
        console.log(result);
        navigate('/Login'); // Navigate to Login page on successful registration
      })
      .catch(err => console.error(err)); // Properly handle promise rejection
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className='bg-white p-3 rounded w-25'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}> {/* Fix typo in handleSubmit */}
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
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input 
              type="text"
              placeholder="email"
              autoComplete="off"
              name="email"
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
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
            Register
          </button>
          <p>Already Have an Account<Link to="/Login"> Login</Link></p> {/* Use Link component */}
        </form>
      </div>
    </div>
  )
}

export default SignupForm;