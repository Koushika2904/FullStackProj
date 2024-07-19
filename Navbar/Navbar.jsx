// Navbar.js

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart from '../Assets/cart.jpg';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Gardney Logo" />
        <p>BloomCart</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => { setMenu("Home") }}><Link to='/'>Home</Link>{menu === "Home" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("Plants") }}><Link to="/Plants">Plants</Link>{menu === "Plants" ? <hr /> : <></>}</li>
        {/* <li onClick={() => { setMenu("Seeds") }}><Link to="/Seeds">Seeds</Link> {menu === "Seeds" ? <hr /> : <></>}</li> */}
        <li onClick={() => { setMenu("Tools") }}><Link to="/Tools">Tools</Link> {menu === "Tools" ? <hr /> : <></>}</li>
      </ul>

      <div className='login-cart'>
        
        <Link to="/Login"><button>Login</button></Link>
        <Link to="/Cart"><img src={cart} alt="Shopping Cart" /></Link>
        <div className="cart-counter">0</div>
      </div>
    </div>
  );
};

export default Navbar;
