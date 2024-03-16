import React from 'react'
import "./App.css"
import { BrowserRouter, Route,Routes,redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
     <div className='app'>
     <BrowserRouter>
     <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>} />
        <Route path='/' exact element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
