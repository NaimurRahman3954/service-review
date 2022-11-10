import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { Link, useLoaderData } from 'react-router-dom'

const ServiceDetails = () => {
  const service = useLoaderData()
  const {
    _id,
    title,
    url,
    difficulty,
    description,
    duration,
    students,
    price,
  } = service
  return (
    <div>
      <div className="flex lg:flex-row my-5 flex-col-reverse container mx-auto">
        {/* description card */}
        <div className="basis-2/3 m-5 card card-side outline outline-1 outline-base-300">
          <div className="flex">
            <div className="card-body">
              <div className="flex justify-between ">
                <h2 className="text-3xl font-bold">{title}</h2>
              </div>
              <p className="card-title mt-9 mb-2 text-primary">Description</p>
              <p className="text-justify ">{description}</p>
              <p className="card-title mt-9 mb-2 text-primary">Top Features</p>
              <p>✅ {duration} hours video</p>
              <p>✅ One-on-one Mentoring</p>
              <p>✅ Practice test from Cambridge IELTS Books</p>
              <p>✅ Test review and feedback</p>
              <p>✅ Quizzes and assignments</p>
              <p>✅ 1 year access</p>
              <div className="card-actions justify-end">
                <Link to={`/services/${_id}/checkout`}>
                  <button className="btn btn-primary">
                    Get Premium Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal py-5"> </div>
        {/* service card */}
        <div className="basis-1/3 lg:m-5 mx-auto">
          <div className="card w-96  outline outline-1 outline-base-300">
            <figure className="m-3 my-9 h-60">
              <PhotoProvider>
                <PhotoView src={url}>
                  <img src={url} alt="" width={300} height={300} />
                </PhotoView>
              </PhotoProvider>
            </figure>
            <div className="card-body bg-base-200">
              <h2 className="card-title font-bold mb-6">{title}</h2>
              <div className="card-actions justify-start">
                <p>
                  <div className="badge badge-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>{' '}
                    {duration} hours video lesson
                  </div>
                </p>
                <p>
                  <div className="badge badge-outline">
                    Difficulty level: {difficulty}
                  </div>
                </p>
                <p>
                  <div className="badge badge-outline">
                    {students} students enrolled already
                  </div>
                </p>
              </div>

              <div className="badge badge-warning font-extrabold my-6 p-3">
                ৳ {price}
              </div>
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
                <div className="card-actions justify-end w-full">
                  <Link to={`/services/${_id}/checkout`}>
                    <button className="btn btn-outline btn-primary">
                      Get Premium Access
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Review Card */}
      <div className="container mx-auto my-12">
        <h1 className="text-5xl font-bold mt-12 text-center">Reviews</h1>
      </div>
    </div>
  )
}

export default ServiceDetails
