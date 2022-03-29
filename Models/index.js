const { model } = require('mongoose')
const CarSchema = require('./Cars')
const CarLotSchema = require('./CarLot')


const Car = model('Cars', CarSchema)
const CarLot = model('CarLot', CarLotSchema)

module.exports = {
  Car,
  CarLot

}
