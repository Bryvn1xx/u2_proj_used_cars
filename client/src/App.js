
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Economy from './pages/Economy'
import Header from './components/Header'
import AddCar from './components/AddCar'
import ViewCar from './pages/ViewCar'
import UpdateCar from './components/UpdateCar'


const App = () => {
  return (
    <div className="App">
      <header className='headerr'>
        <Header classame='navHead' />
      </header>

      <h1 className='title'>Luxury Motors</h1>
      <main>
        <Routes className='routesHead'>


          <Route path='/' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Economy' element={<Economy />} />
          <Route path='AddCar' element={<AddCar />} />
          <Route path='cars/:id' element={<ViewCar />} />
          <Route path='cars/:id/update' element={<UpdateCar />} />


        </Routes>

      </main>



    </div>
  );
}

export default App;
