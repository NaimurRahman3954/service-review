import React from 'react'

const ReviewCard = (props) => {
  const { name, image, text } = props.review
  return (
    <div>
      <div className="card w-96 outline outline-1 outline-base-300 m-6">
        <figure className="p-10">
          <img src={image} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center bg-base-200 rounded-b-2xl">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title text-gray-400">❝</h2>
          <p className="h-44 py-auto">{text.slice(0, 250)}...</p>
          <h2 className="card-title text-gray-400">❞</h2>
          <div className="card-actions">
            <div className="flex align-middle">
              <div className="rating rating-sm pt-3">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
