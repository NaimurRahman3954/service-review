import { getAuth, updateProfile } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext'
import app from '../firebase/firebase.init'

const auth = getAuth(app)

const Register = () => {
  const [passwordError, setPasswordError] = useState('')
  const [success, setSuccess] = useState(false)
  const { createUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleRegister = (event) => {
    event.preventDefault()
    setSuccess(false)

    const form = event.target
    const name = form.name.value
    const photoURL = form.photoURL.value
    const email = form.email.value
    const password = form.password.value

    setPasswordError('')

    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        setSuccess(true)
        form.reset()
        updateUser(name, photoURL)
        navigate('/')
      })
      .catch((error) => {
        // const errorCode = error.code
        // const errorMessage = error.message
        setPasswordError(error.message)
      })
  }

  const updateUser = (name, URL) => {
    updateProfile(auth.currentUser, {
      photoURL: URL,
      displayName: name,
    })
      .then(() => {
        console.log('photoURL updated')
      })
      .catch((error) => console.error(error))
  }

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen sm:justify-center sm:pt-0">
        <div className="w-full px-9 py-4 overflow-hidden bg-base-200 shadow-2xl sm:max-w-lg sm:rounded-lg mb-12">
          <h1 className="text-2xl font-bold mt-4 mb-9 text-center text-gray-200">
            Register your account 🖊️
          </h1>
          <form onSubmit={handleRegister}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 undefined"
              >
                Full Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  required
                  className="block w-full mt-1 p-1 px-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-300 undefined"
              >
                Photo URL
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="url"
                  name="photoURL"
                  placeholder="photo URL"
                  required
                  className="block w-full mt-1 p-1 px-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                  className="block w-full mt-1 p-1 px-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  placeholder="your password"
                  required
                  className="block w-full mt-1 p-1 px-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <a href="/" className="text-xs text-info hover:underline">
              Forget Password?
            </a>
            <p className="text-danger my-2 text-secondary">{passwordError}</p>
            {success && (
              <p className="text-success">User created successfully!</p>
            )}
            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Register
              </button>
            </div>
          </form>
          <div className="my-4 text-gray-400">
            Already have an account?{' '}
            <span>
              <Link className="text-info hover:underline" to="/login">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
