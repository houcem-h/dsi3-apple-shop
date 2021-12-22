const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true},
  last_update: {type: String, required: true},
  instructor: {type: String, required: true},
  language: {type: String, required: true},
  price: {type: Number, required: true},
  goals: {type: Array, required: true},
  requirements: {type: Array, required: true}
});

module.exports = mongoose.model('Course', courseSchema);
