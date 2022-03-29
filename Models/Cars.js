const { Schema } = require('mongoose')



const Car = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },

  },
  { timestamps: true }
)
module.exports = Car