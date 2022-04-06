import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import AllCarsCard from '../components/AllCarsCard'
import CarCard from '../components/CarCard'






const Home = () => {
  const [cars, setCars] = useState([])
  const [carLots, setCarLots] = useState([])
  useEffect(() => {

    const getCars = async () => {
      const res = await axios.get(`http://localhost:3001/cars`)
      setCars(res.data)
    }
      const getLots = async () => {
        const res = await axios.get('http://localhost:3001/carlots')
        setCarLots(res.data)
      }
      
      
    
    getCars()
    getLots()
  }, [])


  return (

    <div className='headerCover'>
      <h1>Check out our entire inventory!</h1>
      <div className='content'>
        <div className='carlot-box'>
          {carLots.map((carLot, index) => (
            <div>
              <h2>
                {carLot.name}
                {', '}
                {carLot.location}
              </h2>
            </div>
          ))}
          {cars.map((car, index) => (

            <CarCard image={car.img} {...car} />

          ))}
        </div>
      </div>
    </div >

  )
}

export default Home