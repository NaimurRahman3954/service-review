import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Checkout = () => {
  const service = useLoaderData()
  const { title, price } = service
  return (
    <div className="hero">
      <div className="card bg-base-100 text-neutral-content my-20  outline outline-1 outline-base-300">
        <div className="card-body p-12 items-center text-center text-black">
          <h2 className="card-title text-4xl font-bold">{title}</h2>
          <div className="badge badge-warning font-bold my-6 p-3 mb-9">
            Price: ৳ {price} only
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost">Cancel</button>
            <button className="btn btn-primary">Proceed to payment →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
