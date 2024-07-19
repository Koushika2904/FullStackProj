// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';
import './plantspage.css';

function PlantPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {Array.isArray(products) && products.map(product => (
          <div key={product._id} className="product">
            <img src={product.image} alt={product.Name} onClick={() => handleAddToCart(product)} />
            <h2>{product.Name}</h2>
            <p>Category: {product.Category}</p>
            <p>Specification: {product.Specification}</p>
            <p>Rate: {product.Rate}</p>
            <Link to={`/products/${product._id}`}>
              <button>View Product</button>
             
            </Link>
           
          </div>
        ))}
      </div>
    </div>
  );
}

// Add prop types validation
PlantPage.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default PlantPage;
