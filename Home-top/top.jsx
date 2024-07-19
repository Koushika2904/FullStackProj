// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import home2Top from "../Assets/home2Top.jpg";
import './top.css';

const Top = () => {
  return (
    <div className='top'>
      <div className="top-left">
        <p>Greener Life</p>
        <h2>Brighter Vibes</h2>
        <Link to="/Arrivals" className='btn'>New Arrivals</Link>
      </div>
      
      <div className="top-right">
        <img src={home2Top} alt="Home 2 Top" />
      </div>
    </div>
  );
}

export default Top;
