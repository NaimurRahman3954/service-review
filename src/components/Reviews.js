import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  const service = useLoaderData()
  const { reviews } = service
  return (
    <div className="container mx-auto my-10 text-center">
      <div className="flex flex-wrap align-middle justify-center">
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  )
}

export default Reviews
