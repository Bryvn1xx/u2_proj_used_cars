import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UpdateCar from '../components/UpdateCar'


const ViewCar = (props) => {

  let { id } = useParams()
  const [carDetails, setCarDetails] = useState('')

  useEffect(() => {
    console.log(carDetails)
    const getCarDetails = async () => {
      const res = await axios.get(`http://localhost:3001/cars/${id}`)

      setCarDetails(res.data)
    }
    getCarDetails()
  }, [id])

  return (
    <div>
      <div className="viewCard">
        <div className="cardImg">
          <img className='carcard-img' src={carDetails.img} alt="404 err"></img>
        </div>
        <div className="cardDes">
          <h1>Make: {carDetails.make}</h1>
          <div>
            <p>Model: {carDetails.model}</p>
            <p>Year: {carDetails.year}</p>
            <p>Price: Call for details</p>
            <p>Miles: Call for details</p>
            <Link className='updateBtn' to={`/cars/${id}/update`} >Update</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewCar


















