import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log('context', user)

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services" className="justify-between">
          Services
        </Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  )

  const privateMenuItems = (
    <>
      <li>
        <Link to="/myreviews">My Reviews</Link>
      </li>
      <li>
        <Link to="/addservice" className="justify-between">
          Add Service
        </Link>
      </li>
    </>
  )

  return (
    <div className="bg-base-200 mx-auto py-2">
      <div className="navbar container mx-auto flex justify-center align-middle">
        <div className="navbar-start">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl font-bold text-primary font-mono"
          >
            IELTS Mentor
            {/* <img
              src="https://i.ibb.co/YX56hfJ/ielts-mentor-logo.png"
              alt=""
              className="h-24"
            /> */}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {!user?.uid && (
            <div>
              <Link className="btn btn-outline btn-primary mx-1" to="/login">
                Login
              </Link>
            </div>
          )}
          {user?.uid && (
            <div className="flex items-center">
              <div className="menu menu-horizontal p-0 hidden lg:flex">
                {privateMenuItems}
              </div>
              <div>
                <button onClick={handleSignOut} className="btn btn-sm">
                  Log Out
                </button>
              </div>
              <div
                className="rounded-full avatar w-12 mask mask-circle mx-2 tooltip"
                data-tip={user.displayName}
              >
                <img src={user.photoURL} alt="" width={36} />
              </div>
            </div>
          )}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              {privateMenuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
