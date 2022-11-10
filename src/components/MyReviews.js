import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/UserContext'
import MyReviewCard from './MyReviewCard'

const MyReviews = () => {
  const { user } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch(
      'https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/reviews'
    )
      .then((res) => res.json())
      .then((data) => {
        const newReviews = data
        //   const newReviews = [...reviews, data]
        setReviews(newReviews)
      })
  }, [user?.displayName])

  return (
    <div className="container mx-auto my-10 text-center">
      <div className="flex flex-wrap align-middle justify-center">
        {reviews.map((review) => (
          <MyReviewCard key={review.name} review={review}></MyReviewCard>
        ))}
      </div>
    </div>
  )
}

export default MyReviews
