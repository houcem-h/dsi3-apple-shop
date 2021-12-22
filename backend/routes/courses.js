const express = require('express');
const router = express.Router();

const Course = require('./../models/Course');

// get all courses
router.get('/', (req, res) => {
  Course.find()
    .then(courses => res.status(200).json(courses))
    .catch(err => res.status(400).json({error: err.message}));
});

// get a course by id
router.get('/:id', (req, res, next) => {
  Course.findOne({ _id: req.params.id })
      .then(course => res.status(200).json(course))
      .catch(error => res.status(404).json({ error }));
  });

module.exports = router;
