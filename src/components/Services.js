import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-5xl font-bold mb-6">Services I offer</h1>
      <div className="flex flex-wrap align-middle">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  )
}

export default Services
