import React, { useEffect, useState } from 'react'

import ServiceCard from './ServiceCard'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])
  return (
    <div className="container mx-auto my-10 text-center">
      <div className="flex flex-wrap align-middle">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  )
}

export default Services
