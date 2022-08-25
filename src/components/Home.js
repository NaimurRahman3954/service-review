// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AboutMe from './AboutMe'
import Banner from './Banner'
import Contact from './Contact'
import Pricing from './Pricing'
import Services from './Services'
import Stats from './Stats'

const Home = () => {
  return (
    <div className="App">
      <Banner></Banner>
      <h1 className="text-5xl font-bold mt-32">Services I offer</h1>
      <Services></Services>
      <Link to="/services">
        <button className="btn btn-primary mb-6">See All →</button>
      </Link>
      <AboutMe></AboutMe>
      <Stats></Stats>
      <h1 className="text-5xl font-bold mt-32">
        Become a <span className="text-primary">Pro</span> Member
      </h1>
      <p className="text-lg stat-title font-bold mt-3">
        Get unlimited access to any service
      </p>
      <Pricing></Pricing>
      <Contact></Contact>
    </div>
  )
}

export default Home
