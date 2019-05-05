const router = require('express').Router();
const bookRoutes = require('./book');

// Import all the of routes into one file
router.use('/book', bookRoutes);

module.exports = router;