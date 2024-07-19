// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  // State to store cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to fetch cart items from the backend
  const fetchCartItems = async () => {
    try {
      // Make a GET request to fetch cart items
      const response = await axios.get('http://localhost:3001/cart/userId'); // Replace 'userId' with the actual user ID
      // Set cart items state with the response data
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  // useEffect hook to fetch cart items when the component mounts
  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {/* Display cart items */}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {/* Display item details */}
            <p>{item.name} - {item.rate} - {item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
