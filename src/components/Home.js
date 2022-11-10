import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AboutMe from './AboutMe'
import Banner from './Banner'
import Contact from './Contact'
import Services from './Services'

const Home = () => {
  return (
    <div className="App">
      <Banner></Banner>
      <h1 className="text-5xl font-bold mt-12">Services I offer</h1>
      <Services></Services>
      <Link to="/services">
        <button className="btn btn-primary mb-6">See All →</button>
      </Link>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </div>
  )
}

export default Home
