import React, { useState } from 'react'

const AddReview = () => {
  const [user, setUser] = useState({}) // 🛑

  const handleAddReview = (event) => {
    event.preventDefault()
    console.log(user)

    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert('User added successfully')
          event.target.reset()
        }
      })
  }

  const handleInputBlur = (event) => {
    const field = event.target.name
    const value = event.target.value
    const newUser = { ...user }
    newUser[field] = value
    setUser(newUser)
  }
  return (
    <div>
      <h3>Please, add a review</h3>
      <form onSubmit={handleAddReview}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="address"
          placeholder="address"
          required
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          id=""
          placeholder="email"
          required
        />
        <br />
        <button type="submit">Add Review</button>
      </form>
    </div>
  )
}

export default AddReview
