const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Connect to MongoDB

// To have configuration file
dotenv.config({ path: './config.env' });
//console.log(process.env)

// DB String with Dynamic Password
const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASS);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const connectDB = () => {
  mongoose
    .connect(DB, options)
    .then(() => {
      console.log('DB Connection Successful');
    })
    .catch(err => {
      console.log('Error connecting to MongoDB:', err.message);
    });
};

module.exports = connectDB;
