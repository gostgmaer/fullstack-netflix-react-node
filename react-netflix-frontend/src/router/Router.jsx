import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homePage'
import Login from '../pages/login'
import Register from '../pages/signup/signup'
import Watch from '../pages/Watch/Watch'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/sign-in' element={<Login/>} />
      <Route path='/home' element={<Homepage/>} />
      <Route path='/watch' element={<Watch/>} />
    </Routes>
  )
}

export default Router