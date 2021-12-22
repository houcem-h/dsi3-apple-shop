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

  // store a new course
router.post('/', (req, res, next) => {
  const course = new Course({
    ...req.body
  });
  course.save()
    .then(() => res.status(201).json({ message: 'Course created  !'}))
    .catch(error => res.status(400).json({ error }));
});

// update a course by id
router.put('/:id', (req, res, next) => {
  Course.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Course updated !'}))
    .catch(error => res.status(400).json({ error }));
});

module.exports = router;
