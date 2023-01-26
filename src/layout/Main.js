import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Main = () => {
  return (
    <div>
      <div className="bg-yellow-200">
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
