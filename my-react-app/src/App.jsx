import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Homee/Home';
import Navbar from './Components/Navbarr/Navbar';
import Footer from './Components/Footerr/Footer';
import AboutUs from './Components/AboutUss/AboutUs';
import Contact from './Components/Contactt/Contact';
import Villas from './Components/Villass/Villas';
import SingleVilla from './Components/Villass/SingleVilla';
import './App.css'



const App = () => {
  
  return (
    <>
   
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/villas' element={<Villas/>}/>
        <Route path='/villa/:id' element={<SingleVilla/>}/>
      </Routes>
      <Footer/>
    </Router>
 
    </>
  
  )
}

export default App