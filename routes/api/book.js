const router = require('express').Router();
const bookController = require('../../controllers/bookController');

// Match with the route "/api/book/"
router.route('/')
  .get(bookController.findAll)
  .post(bookController.create);

// Match with route "/api/book/:id"
router.route('/:id')
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;