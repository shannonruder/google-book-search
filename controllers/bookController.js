const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Book
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel));
  },

  findById: (req, res) => { 
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel));
  },

  create: (req, res) => {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel));
  },

  update: (req, res) => {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
      .then(dbModel => res.json(dbModel));
  },

  remove: (req, res) => {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel));
  }
}