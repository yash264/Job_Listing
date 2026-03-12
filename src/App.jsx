import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Component/Header.jsx'
import Hero from './Component/Hero.jsx';

function App() {
  return (
    <>
      <div className='bg-black min-h-screen text-black'>
        <Header />
        {/* <Routes>
        <Route path="/" element={<Header/>} />
      </Routes> */}
      <Hero/>
      </div>
    </>
  )
}

export default App
