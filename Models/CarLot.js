const { Schema } = require('mongoose')



const CarLot = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    cars: [{ type: Schema.Types.ObjectId, ref: 'Car', required: false }]

  },
  { timestamps: true }
)
module.exports = CarLot