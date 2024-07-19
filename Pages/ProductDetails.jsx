// src/Components/ProductDetails.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './proDetails.css'; // Importing the CSS file

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setError('Error fetching product. Please try again later.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-details">
      {product && (
        <>
          <img src={product.image} alt={product.Name} />
          <h1>{product.Name}</h1>
          <p><span>Category:</span> {product.Category}</p>
          <p><span>Specification:</span> {product.Specification}</p>
          <p><span>Description:</span> {product.Description}</p>
          <p><span>Rate:</span> {product.Rate}</p>
          <button>Add To Cart</button>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
