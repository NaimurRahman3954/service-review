import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/UserContext'

const AddReview = () => {
  const [myNewReview, setMyNewReview] = useState({}) // 🛑
  const { user } = useContext(AuthContext)

  const handleAddReview = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const photoURL = form.photoURL.value
    const review = form.review.value
    console.log(name, photoURL, review)

    const newReviewObject = {
      name: name,
      image: photoURL,
      text: review,
    }

    fetch(
      'https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/reviews',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newReviewObject),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('Review added successfully')
          form.reset()
        }
      })
  }

  const handleInputBlur = (event) => {
    const field = event.target.name
    const value = event.target.value
    const newReview = { ...myNewReview }
    myNewReview[field] = value
    setMyNewReview(newReview)
  }

  return (
    <div className="flex justify-center">
      <form onSubmit={handleAddReview}>
        <div className="card  w-96 outline outline-1 outline-base-200">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                onBlur={handleInputBlur}
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                defaultValue={user?.displayName}
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                onBlur={handleInputBlur}
                name="photoURL"
                type="url"
                placeholder="photo URL"
                className="input input-bordered"
                defaultValue={user?.photoURL}
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Review</span>
              </label>
              <textarea
                onBlur={handleInputBlur}
                name="review"
                className="textarea textarea-primary"
                placeholder="review"
                required
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Add Review
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddReview
