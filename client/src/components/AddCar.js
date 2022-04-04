import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateCar = (props) => {
  // const [updateCar, setUpdateCar] = ([])
  const [addCar, setAddCar] = useState({

    make: '',
    model: '',
    year: '',
    id: '',
    img: ''


  })
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/cars', addCar)
      .then((res) => console.log('successful'))
      .catch((err) => console.log(err.data))
    navigate('/')
  }

  return (
    <div className='addCar'>
      <h1>Add Car</h1>
      <form onSubmit={handleSubmit}>



        <input
          type='text'
          name='car'
          value={addCar.make}
          placeholder='make'
          onChange={(e) => setAddCar({ ...addCar, make: e.target.value })}
        ></input>

        <input
          type='text'
          name='model'
          value={addCar.model}
          placeholder='model'
          required
          onChange={(e) =>
            setAddCar({ ...addCar, model: e.target.value })
          }
        ></input>
        <input
          type='number'
          name='year'
          value={addCar.year}
          placeholder='year'
          required
          onChange={(e) =>
            setAddCar({ ...addCar, year: e.target.value })
          }

        ></input>

        <input
          type="text"
          required
          name="img"
          value={addCar.img}
          placeholder="Image URL"
          onChange={(e) => setAddCar({ ...addCar, img: e.target.value })}
        ></input>
        <button className='submit' text='submit'>
          Add Car
      </button>
        <button className='Update' text='Update' >
          Update
      </button>






      </form>
    </div>
  )
}


export default CreateCar