import { React, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const UpdateCar = (props) => {


  const [updateCar, setUpdateCar] = useState({
    make: '',
    model: '',
    year: '',
    img: ''
  })
  console.log(updateCar, 'usestate')
  const [selectedCar, setSelectedCar] = useState({})
  let { id } = useParams()


  const getUpdate = async (e) => {
    e.preventDefault()
    const res = await axios.put(`http://localhost:3001/cars/${id}`, updateCar)
    console.log(res, 'res  ')

  }
  //updateForm
  return (
    <div className='updateForm'>
      <form onSubmit={((e) => getUpdate)}>
        <input
          type="text"
          name="img"
          value={selectedCar.img}
          placeholder="img"
          onChange={(e) => setUpdateCar({ ...updateCar, img: e.target.value })}
        ></input>
        <input
          type="text"
          name="make"
          value={selectedCar.make}
          placeholder="make"
          onChange={(e) => setUpdateCar({ ...updateCar, make: e.target.value })}
        ></input>
        <input
          type="text"
          name="model"
          value={selectedCar.model}
          placeholder="model"
          onChange={(e) => setUpdateCar({ ...updateCar, model: e.target.value })}
        ></input>
        <input
          type="text"
          name="year"
          value={selectedCar.year}
          placeholder="year"
          onChange={(e) => setUpdateCar({ ...updateCar, year: e.target.value })}
        ></input>
        <button className='Update' text='Update' onClick={getUpdate}>
          Update
      </button>
      </form>
    </div>
  )
}
export default UpdateCar