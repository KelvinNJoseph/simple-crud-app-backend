const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/product.model'); 
const app = express();
const PORT = 3000;
const productRoute = require('./routes/product.route');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/products', productRoute);



// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed:', error.message);
  });
