const db = require('../db')
const { Car, CarLot } = require('../Models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const car1 = await new Car({
    make: 'Chevrolet',
    model: 'Tahoe',
    year: 2020,
    img: 'https://glendorachevrolet.com/wp-content/uploads/2019/03/2019-Chevy-Tahoe.jpg'

  })
  car1.save()

  const car2 = await new Car({
    make: 'Toyota',
    model: 'Camry',
    year: 2021
  })
  car2.save()

  const car3 = await new Car({
    make: 'Honda',
    model: 'Accord',
    year: 2020
  })
  car3.save()

  const car4 = await new Car({
    make: 'Nissan',
    model: 'Versa',
    year: 2019
  })
  car4.save()

  const car5 = await new Car({
    make: 'Nissan',
    model: 'Maxima',
    year: 2020
  })
  car5.save()

  const carLot = await new CarLot({
    name: 'Luxury Motors',
    location: 'Rancho Cucamonga, CA'

  })
  carLot.save()


  console.log('Created cars!')



}
const run = async () => {
  // await db.dropDatabase()
  await main()
  // db.close()
}

run()