import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <div className="container mx-auto lg:p-12 " id="about-me">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/r3x0zpy/me-1.png"
          className="max-w-lg px-6 lg:px-0"
          alt=""
        />
        <div className="text-left p-10">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">
            Hi! My name is Naimur Rahman. I'll help you prepare for your IELTS
            exam. I'll teach you all the tips and tricks you need to know in
            order to ace the test. I have also developed country's first
            computer-delivered mock test exactly like British Council so that
            you can be ready and feel comfortable in your final text.
          </p>
          <Link to="/services">
            <button className="btn btn-primary">Explore Services</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
