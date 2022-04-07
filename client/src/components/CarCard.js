import React from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'


const CarCard = (props) => {
  let navigate = useNavigate()

  const carDelete = async (id) => {
    await axios.delete(`http://localhost:3001/cars/${id}`)
    navigate('About')
  }
  return (
    <div className="details-summary" >
      <div className="carCard">
        <Link
          className="viewPage" to={`/cars/${props._id}`} >

          <img className='carcard-img' src={props.img} alt="404 err"></img>
        </Link>
        <h1>Make: {props.make}</h1>
        <p>Model: {props.model}</p>
        <p>Year: {props.year}</p>
        <button className='deleteBtn' onClick={() => carDelete(props._id)}>Delete</button>

      </div>
    </div>
  )
}
export default CarCard