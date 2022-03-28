require('dotenv').config()

const express = require('express')
// const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})


mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// app.use(cors())
app.use(express.json())

const usedCarsRouter = require('./Controllers/UsedCars')
app.use('/UsedCars', usedCarsRouter)

