const { Schema } = require('mongoose')



const Car = new Schema(
  {
    carlot: { type: Schema.Types.ObjectId, ref: 'CarLot', required: false },
    make: { type: String, required: false },
    model: { type: String, required: false },
    year: { type: Number, required: false },
    img: { type: String, required: false },
    id: { type: String, required: false },
    mpg: { type: Number, required: false }

  },
  { timestamps: true }
)
module.exports = Car