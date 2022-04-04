import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import AllCarsCard from '../components/AllCarsCard'
import CarCard from '../components/CarCard'






const Home = () => {
  const [cars, setCars] = useState([])
  useEffect(() => {

    const getCars = async () => {
      const res = await axios.get(`http://localhost:3001/cars`)

      setCars(res.data)
    }
    getCars()
  }, [])



  return (

    <div className='headerCover'>
      <h1>Check out our entire inventory!</h1>
      <div className='content'>
        <div className='carlot-box'>
          {cars.map((car, index) => (

            <CarCard image={car.img} {...car} />

          ))}
        </div>
      </div>
    </div >

  )
}

export default Home