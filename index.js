// app.js (backend)
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const Product = require('./models/Product');
const UserModel = require('./models/user'); 

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Garden-Store")
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.error("DB connection failed:", error)); 

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.json("registered");
  }
  UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
}); 
  
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  UserModel.findOne({ username })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Invalid Password");
        }
      } else {
        res.json("User not found");
      }
    })
    .catch(err => res.json(err));
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/user/:username', async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/cart/add', async (req, res) => {
  try {
    const { productId, userId } = req.body;
    // Add productId to user's cart in the database
    // You may need to perform validations and handle errors appropriately
    // Example: 
    const user = await User.findById(userId);
    user.cart.push(productId);
    await user.save();
    res.status(200).json({ message: 'Product added to cart' });
  } catch (error) {
   
    
  }
});

// Retrieve cart information
app.get('/cart/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    // Fetch user's cart information from the database
    // Example: 
    const user = await User.findById(userId).populate('cart');
    const cartItems = user.cart;
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart information:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});