import React, { useEffect, useState } from 'react'
import AboutMe from './AboutMe'
import Banner from './Banner'
import Contact from './Contact'

const Home = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  const handleAddUser = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const user = { name, email }
    console.log(user)

    // posting data to the server
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const newUsers = [...users, data]
        setUsers(newUsers)
      })
      .catch((err) => console.error(err))

    event.target.reset()
  }

  return (
    <div className="App">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Contact></Contact>

      {/* user input form */}
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="name" />
        <br />
        <input type="email" name="email" id="" placeholder="email" />
        <br />
        <button type="submit">Add User</button>
      </form>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            Name: {user.name} <br /> email: {user.email}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Home
