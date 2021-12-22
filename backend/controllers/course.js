const Course = require('./../models/Course');

// get all courses
exports.all = (req, res) => {
  Course.find()
    .then(courses => res.status(200).json(courses))
    .catch(err => res.status(400).json({error: err.message}));
};

// get a course by id
exports.get = (req, res, next) => {
  Course.findOne({ _id: req.params.id })
      .then(course => res.status(200).json(course))
      .catch(error => res.status(404).json({ error }));
  };

  // store a new course
exports.create = (req, res, next) => {
  const course = new Course({
    ...req.body
  });
  course.save()
    .then(() => res.status(201).json({ message: 'Course created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update a course by id
exports.update = (req, res, next) => {
  Course.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Course updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete a course by id
exports.delete = (req, res, next) => {
  Course.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Course deleted !'}))
    .catch(error => res.status(400).json({ error }));
};
