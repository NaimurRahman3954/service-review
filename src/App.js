import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main'
import Home from './components/Home'
import Blog from './components/Blog'
// import Login from './components/Login'
// import Register from './components/Register'
import PageNotFound from './components/PageNotFound'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/home',
          element: <Home></Home>,
        },
        // {
        //   path: '/courses',
        //   element: <Courses></Courses>,
        // },
        {
          path: '/blog',
          element: <Blog></Blog>,
        },
        // {
        //   path: '/login',
        //   element: <Login></Login>,
        // },
        // {
        //   path: '/register',
        //   element: <Register></Register>,
        // },
        // {
        //   path: '/courses/:id',
        //   element: <CourseDetails></CourseDetails>,
        //   loader: ({ params }) =>
        //     fetch(
        //       `https://cognition-learning-center-naimurrahman3954.vercel.app/courses/${params.id}`
        //     ),
        // },
        // {
        //   path: '/courses/:id/checkout',
        //   element: (
        //     <PrivateRoute>
        //       <Checkout></Checkout>
        //     </PrivateRoute>
        //   ),
        //   loader: ({ params }) =>
        //     fetch(
        //       `https://cognition-learning-center-naimurrahman3954.vercel.app/courses/${params.id}`
        //     ),
        // },
      ],
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
