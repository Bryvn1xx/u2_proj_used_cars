const express = require('express')
const Cars = require('../Models/Cars')
const router = express.Router()
const Car = require('../Models/Cars')


// get all
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find()
    res.json(cars)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// get one
router.get('/:id', (req, res) => {
  res.send(req.params.id)
})
// create one
router.post('/', (req, res) => {

})

// update one
router.put('/', (req, res) => {

})

// delete one
router.delete('/:id', (req, res) => {

})


module.exports = router