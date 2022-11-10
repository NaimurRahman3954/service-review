import React, { useContext } from 'react'

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault()
    const form = event.target
    const title = form.title.value
    const url = form.url.value
    const price = form.price.value
    const description = form.description.value
    const difficulty = form.difficulty.value

    const newServiceObject = {
      title: title,
      url: url,
      price: price,
      description: description,
      difficulty: difficulty,
    }

    fetch(
      'https://b6a11-service-review-server-side-naimur-rahman3954.vercel.app/services',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newServiceObject),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('Service added successfully')
          form.reset()
        }
      })
  }

  return (
    <div>
      <div className="flex justify-center py-16">
        <form onSubmit={handleAddService}>
          <div className="card  w-96 outline outline-1 outline-base-200">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  // onBlur={handleInputBlur}
                  name="title"
                  type="text"
                  placeholder="title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  // onBlur={handleInputBlur}
                  name="url"
                  type="url"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  // onBlur={handleInputBlur}
                  name="price"
                  type="number"
                  placeholder="photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  // onBlur={handleInputBlur}
                  name="description"
                  className="textarea textarea-primary"
                  placeholder="description"
                  required
                ></textarea>
              </div>
              <select name="difficulty" className="select w-full max-w-xs">
                <option disabled selected>
                  Difficulty
                </option>
                <option>Basic</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Service
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddService
