import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/UserContext'
import MyReviewCard from './MyReviewCard'

const MyReviews = () => {
  const { user } = useContext(AuthContext)
  const [reviews, setReviews] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    fetch(
      'https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/reviews'
    )
      .then((res) => res.json())
      .then((data) => {
        const newReviews = data
        //   const newReviews = [...reviews, data]
        setReviews(newReviews)
        if (reviews.length > 0) {
          setloading(false)
        }
      })
  }, [user?.displayName])

  return (
    <div className="container mx-auto my-10 text-center">
      <>
        {loading ? (
          <button className="btn loading bg-primary my-16">
            Your reviews will be shown here after your add them in service page{' '}
          </button>
        ) : (
          <div className="flex flex-wrap align-middle justify-center">
            {reviews.map((review) => (
              <MyReviewCard key={review.name} review={review}></MyReviewCard>
            ))}
          </div>
        )}
      </>
    </div>
  )
}

export default MyReviews
