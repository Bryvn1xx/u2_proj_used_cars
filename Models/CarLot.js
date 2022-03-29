const { Schema } = require('mongoose')



const CarLot = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true }


  },
  { timestamps: true }
)
module.exports = CarLot