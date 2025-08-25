import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const MainLayOut = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
    </>
  )
}

export default MainLayOut