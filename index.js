const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
// Checking to see if we're in production (process.env.PORT) or we will use a local port (3001);
const PORT = process.env.PORT || 3001;

// Define some middleware Header
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// Make sure to require all the route, then use the app.use to store them
app.use(routes);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Connect to database using Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist');

// Listening on port
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})