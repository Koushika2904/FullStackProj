// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
// import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home.jsx';
import CartPage from './Pages/CartPage.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
// import Seeds from './Pages/Seeds.jsx';
import Tools from './Pages/Tools.jsx';
import PlantPage from './Components/Products/PlantPage'; // Updated import
import ProductDetails from './Pages/ProductDetails'; // New import
// import Profile from './Pages/Profile.jsx';

function App() {
  

  return (
    <Router>
      <div className="app">
        <Navbar  />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Plants" element={<PlantPage />} />
            {/* <Route path="/Seeds" element={<Seeds />} /> */}
            <Route path="/Tools" element={<Tools />} />
            <Route path="/Cart" element={<CartPage />} />
            {/* <Route path="/Profile" element={<Profile />} /> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/products/:id" element={<ProductDetails />} /> {/* New route */}
          </Routes>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
