const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now
  }
})
module.exports = mongoose.model('UsedCars', CarSchema)