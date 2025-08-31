import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Homee/Home';
import Navbar from './Components/Navbarr/Navbar';
import Footer from './Components/Footerr/Footer';
import AboutUs from './Components/AboutUss/AboutUs';
import Contact2 from './Components/Contactt/Contact2';
import Villas from './Components/Villass/Villas';
import SingleVilla from './Components/Villass/SingleVilla';
import './App.css'
import { Toaster } from 'react-hot-toast';



const App = () => {
  
  return (
    <>
   
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact2/>}/>
        <Route path='/villas' element={<Villas/>}/>
        <Route path='/villa/:id' element={<SingleVilla/>}/>
      </Routes>
      
      <Footer/>
      <Toaster />
    </Router>
 
    </>
  
  )
}

export default App

//mongodb+srv://shazii2605_db_user:OmJuyGpaGsZIEUwt@cluster0.xqzm6r9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0