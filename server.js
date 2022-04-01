// import { Car } from './Models/Cars'
const express = require('express')


const cors = require('cors')
const logger = require('morgan')
const { Car } = require('./Models')
const PORT = process.env.PORT || 3001

const db = require('./db')



const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))


//get all
app.get('/cars', async (req, res) => {
  const cars = await Car.find()
  res.json(cars)
})
//getall eco
app.get('/economy', async (req, res) => {
  const cars = await Car.find()
  res.json(cars)
})


//getOne
app.get('/cars/:id', async (req, res) => {
  try {
    const { id } = req.params
    const car = await Car.findById(id)
    if (!car) throw Error('Car not found')
    res.json(car)

  } catch (e) {
    console.log(e)
    res.send('Car not found')
  }
})
//createOne
app.post('/cars', async (req, res) => {
  try {
    const car = await new Car(req.body)
    await car.save()
    return res.status(201).json({
      car
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})
//create eco
app.post('/economy', async (req, res) => {
  try {
    const car = await new Car(req.body)
    await car.save()
    return res.status(201).json({
      car
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})

//deleteOne
app.delete('/cars/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Car.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Car deleted')
    }

    throw new Error('Car not found')
  } catch (err) {
    return res.status(500).send(err.message)
  }
})
//delete eco
app.delete('/economy/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Car.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Car deleted')
    }

    throw new Error('Car not found')
  } catch (err) {
    return res.status(500).send(err.message)
  }
})
// updateOne
// app.put('/:id', async (req, res) => {
//   if (req.body.make != null) {
//     res.car.make = req.body
//   }
//   if (req.body.model != null) {
//     res.car.model = req.body.model
//   }
//   try {
//     const updatedCar = await res.car.save()
//     res.json(updatedCar)
//   } catch (err) {
//     res.status(400).json({ message: err.message })
//   }
// })
app.put('/:id', async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(updatedCar)
  } catch (err) {
    res.send(err.message)
  }
})






app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

