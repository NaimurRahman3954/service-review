import React, { useEffect, useState } from 'react'

import ServiceCard from './ServiceCard'

const Services = () => {
  const [services, setServices] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data)
        setloading(false)
      })
  }, [])

  return (
    <div className="container mx-auto my-10 text-center">
      <>
        {loading ? (
          <button className="btn loading bg-primary my-16">loading</button>
        ) : (
          <div className="flex flex-wrap align-middle justify-center">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service}></ServiceCard>
            ))}
          </div>
        )}
      </>
    </div>
  )
}

export default Services
