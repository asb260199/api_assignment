const express = require('express');
const userHandler = require('./Controller/userHandler');
const connectDB = require('./database');

// Create server
const app = express();
app.use(express.json());

// Connect to DB
connectDB();

// API for sign-up & sign-in
app.post('/api/signup', userHandler.signUp);
app.post('/api/signin', userHandler.signIn);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
