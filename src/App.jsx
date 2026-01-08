import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CollectionPage from './pages/CollectionPage'
import Navbar from "./components/Navbar"
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='min-h-screen max-h-full bg-gray-800 w-full text-white '>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<CollectionPage/>} />
      </Routes>
      <ToastContainer 
      autoClose={2000}
      theme="light"
      />
    </div>
  )
}

export default App