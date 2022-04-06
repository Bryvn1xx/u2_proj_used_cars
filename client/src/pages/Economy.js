import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CarCard from '../components/CarCard'
import { Link } from 'react-router-dom'





const Economy = () => {
  const [cars, setCars] = useState([])
  useEffect(() => {

    const getCars = async () => {
      const res = await axios.get(`http://localhost:3001/economy`)
      console.log(res, 'respond')
      setCars(res.data)
    }
    getCars()
  }, [])



  return (

    <div>
      <h1>Check out our economy inventory!</h1>

      <div className='carlot-box'>

        {cars.map((car, index) => (
          <Link
            className="viewPage"
            to={`/cars/${car._id}`}
            key={car._id}
          >
            <CarCard image={car.img} {...car} />
          </Link>
        ))}

      </div>
    </div >

  )
}

export default Economy