import React from 'react'

const MyReviewCard = (props) => {
  const { name, image, text } = props.review
  return (
    <div>
      <div className="card w-96 outline outline-1 outline-base-300 m-6">
        <div className="relative">
          <figure className="p-10">
            <img src={image} alt="" className="rounded-xl" />
          </figure>
          <div className=" absolute top-3 right-3">
            <button className="btn btn-sm btn-circle btn-outline m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                />
              </svg>
            </button>
            <button className="btn btn-sm btn-circle btn-outline m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="card-body items-center text-center bg-base-200">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title text-gray-400">❝</h2>
          <p className="h-44 py-auto">{text}...</p>
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

export default MyReviewCard
