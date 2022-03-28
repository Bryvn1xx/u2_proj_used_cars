const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const Car = require('../Models/Cars')


// get all
const getAllCars = router.get('/', async (req, res) => {
  try {
    const cars = await Car.find()
    res.json(cars)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// get one
const getCarById = router.get('/:id', getCar, (req, res) => {
  res.send(res.car.make)
})
// create one
router.post('/', async (req, res) => {
  const car = new Car({
    make: req.body.make,
    model: req.body.model
    
  })
  try {
    const newCar = await car.save()
    res.status(201).json(newCar)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})
async function getCar(req, res, next) {
  let car
  try {
    car = await Car.findById(req.params.id)
    if (car == null) {
      return err.status(404).json({ message: 'Cannot find Car'})
    }
  } catch (err) { 
    return res.status(500).json({ message: err.message })
    
  }
  res.car = car
  next()
}

// update one
router.put('/:id', (req, res) => {

})

delete one
const deleteCar = router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Car.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Car deleted')
    }
    throw new Error('Car not found')
  } catch (err) {
    res.status(500).send(err.message)
    
  }

})


module.exports = router